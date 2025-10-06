using API.Application.Features.Project.DTOs;
using API.Application.Features.Project.Queries;
using API.Shared.Models;
using MediatR;

namespace API.EndPoints.Project.GetAll;

public class GetProjectsPagedEndpoint : EndpointDefinition
{
    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet("/projects/paged",
            async (IMediator mediator, int pageIndex = 1, int pageSize = 10, string? searchTerm = null, string? technology = null, CancellationToken cancellationToken = default) =>
            {
                var result = await mediator.Send(new GetProjectsPagedQuery(pageIndex, pageSize, searchTerm, technology), cancellationToken);

                return Response(result);
            })
        .WithTags("Project")
        .Produces<EndPointResponse<PagingDto<ProjectSummaryDTO>>>();
    }
}
