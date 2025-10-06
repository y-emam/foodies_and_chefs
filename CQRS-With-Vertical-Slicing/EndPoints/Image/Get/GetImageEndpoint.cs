using API.Shared.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

namespace API.EndPoints.Image.Get;

public class GetImageEndpoint : EndpointDefinition
{
    public GetImageEndpoint()
    {
        // Parameterless constructor required for endpoint registration
    }

    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet("/uploads/images/{fileName}",
            async (string fileName, HttpContext context, IWebHostEnvironment environment) =>
            {
                try
                {
                    var uploadsPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "images");
                    var filePath = Path.Combine(uploadsPath, fileName);

                    if (!File.Exists(filePath))
                    {
                        return Results.NotFound();
                    }

                    // Get content type
                    var contentTypeProvider = new FileExtensionContentTypeProvider();
                    if (!contentTypeProvider.TryGetContentType(filePath, out var contentType))
                    {
                        contentType = "application/octet-stream";
                    }

                    var fileBytes = await File.ReadAllBytesAsync(filePath);
                    return Results.File(fileBytes, contentType);
                }
                catch (Exception)
                {
                    return Results.NotFound();
                }
            })
        .WithTags("Images")
        .Produces(200)
        .Produces(404);
    }
}
