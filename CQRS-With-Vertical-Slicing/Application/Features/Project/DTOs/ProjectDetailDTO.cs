namespace API.Application.Features.Project.DTOs;

public class ProjectDetailDTO
{
    public long Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string ShortDescription { get; set; } = string.Empty;
    public string DetailedDescription { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string? ProjectUrl { get; set; }
    public string Technologies { get; set; } = string.Empty;
    public DateTime PublishDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public List<ProjectImageDTO> GalleryImages { get; set; } = new();
}

public class ProjectImageDTO
{
    public long Id { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public long ProjectId { get; set; }
}
