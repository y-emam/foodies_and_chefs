using API.Domain.Enums;
using API.Infrastructure.Persistence.Repositories;
using API.Shared.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Features.Project.Commands;

public record DeleteProjectCommand(long ProjectId) : IRequest<RequestResult<bool>>;

public class DeleteProjectCommandHandler : RequestHandlerBase<DeleteProjectCommand, RequestResult<bool>>
{
    private readonly IRepository<Domain.Entities.Project> _projectRepository;
    private readonly IRepository<Domain.Entities.ProjectImage> _projectImageRepository;
    
    public DeleteProjectCommandHandler(
        RequestHandlerBaseParameters parameters, 
        IRepository<Domain.Entities.Project> projectRepository,
        IRepository<Domain.Entities.ProjectImage> projectImageRepository) : base(parameters)
    {
        _projectRepository = projectRepository;
        _projectImageRepository = projectImageRepository;
    }

    public override async Task<RequestResult<bool>> Handle(DeleteProjectCommand request, CancellationToken cancellationToken)
    {
        // Check if project exists
        var project = await _projectRepository.FirstOrDefaultAsync(request.ProjectId, cancellationToken);
        if (project == null)
        {
            return RequestResult<bool>.Failure(ErrorCode.ProjectNotFound);
        }

        // Soft delete the project
        project.IsDeleted = true;
        project.UpdatedAt = DateTime.UtcNow;
        project.UpdatedBy = _userState.UserID;

        _projectRepository.Update(project);

        // Soft delete related gallery images
        var galleryImages = await _projectImageRepository.Get(x => x.ProjectId == request.ProjectId)
            .ToListAsync(cancellationToken);

        foreach (var galleryImage in galleryImages)
        {
            galleryImage.IsDeleted = true;
            galleryImage.UpdatedAt = DateTime.UtcNow;
            galleryImage.UpdatedBy = _userState.UserID;
            _projectImageRepository.Update(galleryImage);
        }

        return RequestResult<bool>.Success(true, "Project deleted successfully.");
    }
}
