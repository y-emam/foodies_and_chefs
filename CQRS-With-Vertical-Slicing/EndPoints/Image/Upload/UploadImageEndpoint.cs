using API.Filters;
using API.Shared.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace API.EndPoints.Image.Upload;

public class UploadImageEndpoint : EndpointDefinition
{
    private readonly string[] _allowedExtensions = { ".jpg", ".jpeg", ".png", ".gif", ".webp" };
    private const long MaxFileSize = 10 * 1024 * 1024; // 10MB

    public UploadImageEndpoint()
    {
        // Parameterless constructor required for endpoint registration
    }

    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapPost("/images/upload",
            async (HttpContext context, IWebHostEnvironment environment, IFormFile file, long? projectId, CancellationToken cancellationToken) =>
            {
                try
                {
                    if (file == null || file.Length == 0)
                    {
                        return Results.BadRequest(EndPointResponse<string>.Failure(Domain.Enums.ErrorCode.EmptyUserNameOrPassword, "No file provided"));
                    }

                    // Validate file size
                    if (file.Length > MaxFileSize)
                    {
                        return Results.BadRequest(EndPointResponse<string>.Failure(Domain.Enums.ErrorCode.EmptyUserNameOrPassword, $"File size exceeds {MaxFileSize / (1024 * 1024)}MB limit"));
                    }

                    // Validate file extension
                    var fileExtension = Path.GetExtension(file.FileName).ToLowerInvariant();
                    if (!_allowedExtensions.Contains(fileExtension))
                    {
                        return Results.BadRequest(EndPointResponse<string>.Failure(Domain.Enums.ErrorCode.EmptyUserNameOrPassword, $"File type not allowed. Allowed types: {string.Join(", ", _allowedExtensions)}"));
                    }

                    // Create uploads directory if it doesn't exist
                    var uploadsPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "images");
                    if (!Directory.Exists(uploadsPath))
                    {
                        Directory.CreateDirectory(uploadsPath);
                    }

                    // Generate unique filename
                    var fileName = $"{Guid.NewGuid()}{fileExtension}";
                    var filePath = Path.Combine(uploadsPath, fileName);

                    // Save file
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream, cancellationToken);
                    }

                    // Generate URL for accessing the image
                    var imageUrl = $"/uploads/images/{fileName}";

                    var response = new UploadImageResponse
                    {
                        ImageUrl = imageUrl,
                        FileName = fileName,
                        OriginalFileName = file.FileName,
                        FileSize = file.Length,
                        ProjectId = projectId
                    };

                    return Results.Ok(EndPointResponse<UploadImageResponse>.Success(response));
                }
                catch (Exception ex)
                {
                    return Results.Problem($"Error uploading file: {ex.Message}");
                }
            })
        .WithTags("Images")
        .Accepts<IFormFile>("multipart/form-data")
        .DisableAntiforgery()
        .Produces<EndPointResponse<UploadImageResponse>>()
        .Produces(400)
        .Produces(500);
    }
}

public class UploadImageResponse
{
    public string ImageUrl { get; set; } = string.Empty;
    public string FileName { get; set; } = string.Empty;
    public string OriginalFileName { get; set; } = string.Empty;
    public long FileSize { get; set; }
    public long? ProjectId { get; set; }
}
