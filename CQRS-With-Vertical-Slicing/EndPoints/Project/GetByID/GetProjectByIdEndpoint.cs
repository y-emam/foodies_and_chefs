using API.Application.Features.Project.DTOs;
using API.Application.Features.Project.Queries;
using API.Filters;
using API.Shared.Models;
using MediatR;

namespace API.EndPoints.Project.GetByID;

public class GetProjectByIdEndpoint : EndpointDefinition
{
    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet("/projects/{projectId:long}",
            async (long projectId, IMediator mediator, CancellationToken cancellationToken) =>
            {
                var result = await mediator.Send(new GetProjectByIdQuery(projectId), cancellationToken);

                return Response(result);
            })
        .WithTags("Project")
        .Produces<EndPointResponse<ProjectDetailDTO>>();
    }
}
