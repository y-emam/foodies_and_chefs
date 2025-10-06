using API.Shared.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace API.EndPoints.Image.Delete;

public class DeleteImageEndpoint : EndpointDefinition
{
    public DeleteImageEndpoint()
    {
        // Parameterless constructor required for endpoint registration
    }

    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapDelete("/images/{fileName}",
            async (string fileName, IWebHostEnvironment environment, CancellationToken cancellationToken) =>
            {
                try
                {
                    var uploadsPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "images");
                    var filePath = Path.Combine(uploadsPath, fileName);

                    if (!File.Exists(filePath))
                    {
                        return Results.NotFound(EndPointResponse<bool>.Failure(Domain.Enums.ErrorCode.UserNotFound, "Image not found"));
                    }

                    File.Delete(filePath);

                    return Results.Ok(EndPointResponse<bool>.Success(true));
                }
                catch (Exception ex)
                {
                    return Results.Problem($"Error deleting image: {ex.Message}");
                }
            })
        .WithTags("Images")
        .Produces<EndPointResponse<bool>>()
        .Produces(404)
        .Produces(500);
    }
}

public class DeleteImageRequest
{
    [Required]
    public string FileName { get; set; } = string.Empty;
}
