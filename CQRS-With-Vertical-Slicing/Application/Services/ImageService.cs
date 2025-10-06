using API.Domain.Entities;
using API.Infrastructure.Persistence.Repositories;

namespace API.Application.Services;

public interface IImageService
{
    Task<string> SaveImageAsync(IFormFile file, long? projectId = null);
    Task<bool> DeleteImageAsync(string fileName);
    string GetImageUrl(string fileName);
    Task<ProjectImage> SaveProjectImageAsync(string imageUrl, long projectId);
}

public class ImageService : IImageService
{
    private readonly IWebHostEnvironment _environment;
    private readonly IRepository<ProjectImage> _projectImageRepository;
    private readonly string[] _allowedExtensions = { ".jpg", ".jpeg", ".png", ".gif", ".webp" };
    private const long MaxFileSize = 10 * 1024 * 1024; // 10MB

    public ImageService(IWebHostEnvironment environment, IRepository<ProjectImage> projectImageRepository)
    {
        _environment = environment;
        _projectImageRepository = projectImageRepository;
    }

    public async Task<string> SaveImageAsync(IFormFile file, long? projectId = null)
    {
        if (file == null || file.Length == 0)
            throw new ArgumentException("No file provided");

        // Validate file size
        if (file.Length > MaxFileSize)
            throw new InvalidOperationException($"File size exceeds {MaxFileSize / (1024 * 1024)}MB limit");

        // Validate file extension
        var fileExtension = Path.GetExtension(file.FileName).ToLowerInvariant();
        if (!_allowedExtensions.Contains(fileExtension))
            throw new InvalidOperationException($"File type not allowed. Allowed types: {string.Join(", ", _allowedExtensions)}");

        // Create uploads directory if it doesn't exist
        var uploadsPath = Path.Combine(_environment.WebRootPath ?? _environment.ContentRootPath, "uploads", "images");
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
            await file.CopyToAsync(stream);
        }

        return fileName;
    }

    public async Task<bool> DeleteImageAsync(string fileName)
    {
        var uploadsPath = Path.Combine(_environment.WebRootPath ?? _environment.ContentRootPath, "uploads", "images");
        var filePath = Path.Combine(uploadsPath, fileName);

        if (!File.Exists(filePath))
            return false;

        File.Delete(filePath);
        return true;
    }

    public string GetImageUrl(string fileName)
    {
        return $"/uploads/images/{fileName}";
    }

    public async Task<ProjectImage> SaveProjectImageAsync(string imageUrl, long projectId)
    {
        var projectImage = new ProjectImage
        {
            ImageUrl = imageUrl,
            ProjectId = projectId
        };

        _projectImageRepository.Add(projectImage);
        await _projectImageRepository.SaveChangesAsync();

        return projectImage;
    }
}
