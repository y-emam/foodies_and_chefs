using API.Application.Features.Project.DTOs;
using API.Infrastructure.Persistence.Repositories;
using API.Shared.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Features.Project.Queries;

public record GetAllProjectsQuery(string? SearchTerm = null, string? Technology = null) : IRequest<RequestResult<List<ProjectSummaryDTO>>>;

public class GetAllProjectsQueryHandler : RequestHandlerBase<GetAllProjectsQuery, RequestResult<List<ProjectSummaryDTO>>>
{
    private readonly IRepository<Domain.Entities.Project> _projectRepository;
    
    public GetAllProjectsQueryHandler(
        RequestHandlerBaseParameters parameters, 
        IRepository<Domain.Entities.Project> projectRepository) : base(parameters)
    {
        _projectRepository = projectRepository;
    }

    public override async Task<RequestResult<List<ProjectSummaryDTO>>> Handle(GetAllProjectsQuery request, CancellationToken cancellationToken)
    {
        var query = _projectRepository.Get();

        // Apply search filter
        if (!string.IsNullOrEmpty(request.SearchTerm))
        {
            var searchTerm = request.SearchTerm.ToLower();
            query = query.Where(p => 
                p.Title.ToLower().Contains(searchTerm) ||
                p.ShortDescription.ToLower().Contains(searchTerm) ||
                p.Technologies.ToLower().Contains(searchTerm));
        }

        // Apply technology filter
        if (!string.IsNullOrEmpty(request.Technology))
        {
            query = query.Where(p => p.Technologies.ToLower().Contains(request.Technology.ToLower()));
        }

        var projects = await query
            .OrderByDescending(p => p.PublishDate)
            .ThenByDescending(p => p.CreatedAt)
            .ToListAsync(cancellationToken);

        var projectDtos = projects.Select(p => new ProjectSummaryDTO
        {
            Id = p.ID,
            Title = p.Title,
            ShortDescription = p.ShortDescription,
            CoverImageUrl = p.CoverImageUrl,
            Technologies = p.Technologies,
            PublishDate = p.PublishDate,
            CreatedAt = p.CreatedAt
        }).ToList();

        return RequestResult<List<ProjectSummaryDTO>>.Success(projectDtos);
    }
}
