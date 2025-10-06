using API.Application.Features.Project.DTOs;
using API.Domain.Enums;
using API.Infrastructure.Persistence.Repositories;
using API.Shared.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Features.Project.Queries;

public record GetProjectByIdQuery(long ProjectId) : IRequest<RequestResult<ProjectDetailDTO>>;

public class GetProjectByIdQueryHandler : RequestHandlerBase<GetProjectByIdQuery, RequestResult<ProjectDetailDTO>>
{
    private readonly IRepository<Domain.Entities.Project> _projectRepository;
    
    public GetProjectByIdQueryHandler(
        RequestHandlerBaseParameters parameters, 
        IRepository<Domain.Entities.Project> projectRepository) : base(parameters)
    {
        _projectRepository = projectRepository;
    }

    public override async Task<RequestResult<ProjectDetailDTO>> Handle(GetProjectByIdQuery request, CancellationToken cancellationToken)
    {
        var project = await _projectRepository
            .Get(x => x.ID == request.ProjectId)
            .Include(p => p.GalleryImages)
            .FirstOrDefaultAsync(cancellationToken);

        if (project == null)
        {
            return RequestResult<ProjectDetailDTO>.Failure(ErrorCode.ProjectNotFound);
        }

        var projectDto = new ProjectDetailDTO
        {
            Id = project.ID,
            Title = project.Title,
            ShortDescription = project.ShortDescription,
            DetailedDescription = project.DetailedDescription,
            CoverImageUrl = project.CoverImageUrl,
            ProjectUrl = project.ProjectUrl,
            Technologies = project.Technologies,
            PublishDate = project.PublishDate,
            CreatedAt = project.CreatedAt,
            UpdatedAt = project.UpdatedAt,
            GalleryImages = project.GalleryImages?.Select(gi => new ProjectImageDTO
            {
                Id = gi.ID,
                ImageUrl = gi.ImageUrl,
                ProjectId = gi.ProjectId
            }).ToList() ?? new List<ProjectImageDTO>()
        };

        return RequestResult<ProjectDetailDTO>.Success(projectDto);
    }
}
