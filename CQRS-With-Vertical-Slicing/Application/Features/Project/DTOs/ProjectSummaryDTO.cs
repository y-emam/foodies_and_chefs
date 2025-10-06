namespace API.Application.Features.Project.DTOs;

public class ProjectSummaryDTO
{
    public long Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string ShortDescription { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string Technologies { get; set; } = string.Empty;
    public DateTime PublishDate { get; set; }
    public DateTime CreatedAt { get; set; }
}
