using API.Domain.UnitOfWork;
using API.EndPoints;
using API.EndPoints.User.Login;
using API.Extensions;
using API.Middlewares;
using API.Shared.Models;
using FluentValidation;
using IdGen;
using Serilog;

try
{
    var builder = WebApplication.CreateBuilder(args);

    Log.Information("Starting Read App Settings");
    builder.ReadAppSettings();
    Log.Information("End Read App Settings");

    builder.ConfigureSerilog();
    Log.Information("Starting APP");

    // Configure Services
    builder.Services.ConfigureServices(builder.Configuration);
    builder.Services.ConfigurePersistence(builder.Configuration, builder.Environment);
    builder.Services.ConfigureResponseCompression(builder.Configuration);
    builder.Services.ConfigureCors(builder.Configuration);
    builder.Services.ConfigureJwt(builder.Configuration);

    // Register Core Services
    builder.Services.AddScoped<UserState>();
    builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
    builder.Services.AddScoped<RequestHandlerBaseParameters>();
    builder.Services.AddScoped<TransactionMiddleware>();
    builder.Services.AddScoped<UserStateInitializerMiddleware>();
    builder.Services.AddSingleton(new IdGenerator(0));
    
    // Register Image Service
    builder.Services.AddScoped<API.Application.Services.IImageService, API.Application.Services.ImageService>();

    // Add Anti-forgery services
    builder.Services.AddAntiforgery();

    // Configure HybridCache/Redis
    builder.ConfigureHybridCache();

    // Configure Rate Limiting
    builder.ConfigureRateLimiting();

    // Register FluentValidation
    builder.Services.AddValidatorsFromAssemblyContaining<UserLoginRequest>();

    builder.Services.AddHttpContextAccessor();

    var app = builder.Build();

    // Initialize Database
    await app.Services.InitializeDatabaseAsync();

    app.EnableCors();
    app.UseAuthentication();
    app.UseAuthorization();
    
    // Configure anti-forgery for form submissions
    app.UseAntiforgery();
    
    // Enable static file serving for uploaded images
    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(
            Path.Combine(app.Environment.WebRootPath ?? app.Environment.ContentRootPath, "uploads")),
        RequestPath = "/uploads"
    });

    // Auto-register endpoints
    var endpointDefinitions = typeof(Program).Assembly
        .GetTypes()
        .Where(t => typeof(EndpointDefinition).IsAssignableFrom(t) && !t.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<EndpointDefinition>();

    foreach (var endpoint in endpointDefinitions)
    {
        endpoint.RegisterEndpoints(app);
    }

    // Use Rate Limiter
    app.UseRateLimiter();
    
    // Enable Response Compression
    app.EnableResponseCompression();

    // Middleware Pipeline
    app.UseMiddleware<GlobalExceptionMiddleware>();
    app.UseMiddleware<RequestTimeoutMiddleware>();
    app.UseMiddleware<SlowRequestLoggingMiddleware>();
    app.UseMiddleware<UserStateInitializerMiddleware>();
    app.UseMiddleware<TransactionMiddleware>();

    app.UseSerilogRequestLogging();

    app.ConfigureEndpoints();

    // Print BaseUrl in development mode
    if (app.Environment.IsDevelopment())
    {
        PrintBaseUrlToConsole(app);
    }

    app.Run();

    Log.Information("APP STARTED");
}
catch (Exception exception)
{
    Log.Fatal(exception, "Application terminated unexpectedly");
    Console.WriteLine(exception.ToString());
}
finally
{
    Log.Error("Shut down complete");
    Log.CloseAndFlush();
}

static void PrintBaseUrlToConsole(WebApplication app)
{
    try
    {
        var urls = app.Urls.ToList();
        var baseUrl = urls.FirstOrDefault() ?? "http://localhost:5000";
        
        Console.WriteLine();
        Console.WriteLine("🚀 " + "=".PadRight(78, '=') + " 🚀");
        Console.WriteLine("🚀 " + " ".PadRight(78, ' ') + " 🚀");
        Console.WriteLine("🚀 " + "CQRS API - Development Mode".PadLeft(51).PadRight(78) + " 🚀");
        Console.WriteLine("🚀 " + " ".PadRight(78, ' ') + " 🚀");
        
        // Print BaseUrl in green color (if supported)
        Console.Write("🚀 " + " ".PadRight(25, ' '));
        Console.ForegroundColor = ConsoleColor.Green;
        Console.Write($"BaseUrl: {baseUrl}");
        Console.ResetColor();
        Console.WriteLine(" ".PadRight(78 - 25 - $"BaseUrl: {baseUrl}".Length) + " 🚀");
        
        Console.WriteLine("🚀 " + " ".PadRight(78, ' ') + " 🚀");
        Console.WriteLine("🚀 " + "Image Upload Test: /images/upload".PadLeft(54).PadRight(78) + " 🚀");
        Console.WriteLine("🚀 " + " ".PadRight(78, ' ') + " 🚀");
        Console.WriteLine("🚀 " + "=".PadRight(78, '=') + " 🚀");
        Console.WriteLine();
    }
    catch (Exception ex)
    {
        // Fallback if console colors don't work
        Console.WriteLine();
        Console.WriteLine("=" + "=".PadRight(78, '='));
        Console.WriteLine("CQRS API - Development Mode");
        Console.WriteLine($"BaseUrl: {app.Urls.FirstOrDefault() ?? "http://localhost:5000"}");
        Console.WriteLine("Image Upload Test: /images/upload");
        Console.WriteLine("=" + "=".PadRight(78, '='));
        Console.WriteLine();
    }
}
