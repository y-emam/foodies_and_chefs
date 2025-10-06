using API.Infrastructure.Persistence.Repositories;
using API.Shared.Models;
using MediatR;

namespace API.Application.Features.Project.Commands;

public record CreateProjectCommand(
    string Title,
    string ShortDescription,
    string DetailedDescription,
    string CoverImageUrl,
    string? ProjectUrl,
    string Technologies,
  //  DateTime PublishDate,
    List<string>? GalleryImageUrls = null) : IRequest<RequestResult<long>>;

public class CreateProjectCommandHandler : RequestHandlerBase<CreateProjectCommand, RequestResult<long>>
{
    private readonly IRepository<Domain.Entities.Project> _projectRepository;
    private readonly IRepository<Domain.Entities.ProjectImage> _projectImageRepository;
    
    public CreateProjectCommandHandler(
        RequestHandlerBaseParameters parameters, 
        IRepository<Domain.Entities.Project> projectRepository,
        IRepository<Domain.Entities.ProjectImage> projectImageRepository) : base(parameters)
    {
        _projectRepository = projectRepository;
        _projectImageRepository = projectImageRepository;
    }

    public override async Task<RequestResult<long>> Handle(CreateProjectCommand request, CancellationToken cancellationToken)
    {
        // Create the main project entity
        var project = new Domain.Entities.Project
        {
            Title = request.Title,
            ShortDescription = request.ShortDescription,
            DetailedDescription = request.DetailedDescription,
            CoverImageUrl = request.CoverImageUrl,
            ProjectUrl = request.ProjectUrl,
            Technologies = request.Technologies,
            PublishDate = DateTime.UtcNow, //request.PublishDate,
            CreatedBy = _userState.UserID,
            CompanyID = _userState.CompanyID
        };

        long projectId = _projectRepository.Add(project);

        // Add gallery images if provided
        if (request.GalleryImageUrls != null && request.GalleryImageUrls.Any())
        {
            var galleryImages = request.GalleryImageUrls.Select(imageUrl => new Domain.Entities.ProjectImage
            {
                ImageUrl = imageUrl,
                ProjectId = projectId
            }).ToList();

            _projectImageRepository.AddRange(galleryImages);
        }

        return RequestResult<long>.Success(projectId, "Project created successfully.");
    }
}
