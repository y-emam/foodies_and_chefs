using API.Application.Features.Project.DTOs;
using API.Infrastructure.Persistence.Repositories;
using API.Shared.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Features.Project.Queries;

public record GetProjectsPagedQuery(
    int PageIndex = 1, 
    int PageSize = 10, 
    string? SearchTerm = null, 
    string? Technology = null) : IRequest<RequestResult<PagingDto<ProjectSummaryDTO>>>;

public class GetProjectsPagedQueryHandler : RequestHandlerBase<GetProjectsPagedQuery, RequestResult<PagingDto<ProjectSummaryDTO>>>
{
    private readonly IRepository<Domain.Entities.Project> _projectRepository;
    
    public GetProjectsPagedQueryHandler(
        RequestHandlerBaseParameters parameters, 
        IRepository<Domain.Entities.Project> projectRepository) : base(parameters)
    {
        _projectRepository = projectRepository;
    }

    public override async Task<RequestResult<PagingDto<ProjectSummaryDTO>>> Handle(GetProjectsPagedQuery request, CancellationToken cancellationToken)
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

        // Get total count
        var totalRecords = await query.CountAsync(cancellationToken);
        var totalPages = (int)Math.Ceiling((double)totalRecords / request.PageSize);

        // Apply pagination and ordering
        var projects = await query
            .OrderByDescending(p => p.PublishDate)
            .ThenByDescending(p => p.CreatedAt)
            .Skip((request.PageIndex - 1) * request.PageSize)
            .Take(request.PageSize)
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

        var pagingResult = new PagingDto<ProjectSummaryDTO>(
            request.PageSize,
            request.PageIndex,
            totalRecords,
            totalPages,
            projectDtos);

        return RequestResult<PagingDto<ProjectSummaryDTO>>.Success(pagingResult);
    }
}
