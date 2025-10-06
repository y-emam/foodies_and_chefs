using API.Domain.Enums;
using API.Infrastructure.Persistence.Repositories;
using API.Shared.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Features.Project.Commands;

public record UpdateProjectCommand(
    long ProjectId,
    string Title,
    string ShortDescription,
    string DetailedDescription,
    string CoverImageUrl,
    string? ProjectUrl,
    string Technologies,
    DateTime PublishDate,
    List<string>? GalleryImageUrls = null) : IRequest<RequestResult<bool>>;

public class UpdateProjectCommandHandler : RequestHandlerBase<UpdateProjectCommand, RequestResult<bool>>
{
    private readonly IRepository<Domain.Entities.Project> _projectRepository;
    private readonly IRepository<Domain.Entities.ProjectImage> _projectImageRepository;
    
    public UpdateProjectCommandHandler(
        RequestHandlerBaseParameters parameters, 
        IRepository<Domain.Entities.Project> projectRepository,
        IRepository<Domain.Entities.ProjectImage> projectImageRepository) : base(parameters)
    {
        _projectRepository = projectRepository;
        _projectImageRepository = projectImageRepository;
    }

    public override async Task<RequestResult<bool>> Handle(UpdateProjectCommand request, CancellationToken cancellationToken)
    {
        // Check if project exists
        var project = await _projectRepository.FirstOrDefaultAsync(request.ProjectId, cancellationToken);
        if (project == null)
        {
            return RequestResult<bool>.Failure(ErrorCode.ProjectNotFound);
        }

        // Update project properties
        project.Title = request.Title;
        project.ShortDescription = request.ShortDescription;
        project.DetailedDescription = request.DetailedDescription;
        project.CoverImageUrl = request.CoverImageUrl;
        project.ProjectUrl = request.ProjectUrl;
        project.Technologies = request.Technologies;
        project.PublishDate = request.PublishDate;
        project.UpdatedAt = DateTime.UtcNow;
        project.UpdatedBy = _userState.UserID;

        _projectRepository.Update(project);

        // Update gallery images
        var existingImages = await _projectImageRepository.Get(x => x.ProjectId == request.ProjectId)
            .ToListAsync(cancellationToken);

        // Remove existing gallery images
        foreach (var existingImage in existingImages)
        {
            _projectImageRepository.Delete(existingImage);
        }

        // Add new gallery images if provided
        if (request.GalleryImageUrls != null && request.GalleryImageUrls.Any())
        {
            var galleryImages = request.GalleryImageUrls.Select(imageUrl => new Domain.Entities.ProjectImage
            {
                ImageUrl = imageUrl,
                ProjectId = request.ProjectId
            }).ToList();

            _projectImageRepository.AddRange(galleryImages);
        }

        return RequestResult<bool>.Success(true, "Project updated successfully.");
    }
}
