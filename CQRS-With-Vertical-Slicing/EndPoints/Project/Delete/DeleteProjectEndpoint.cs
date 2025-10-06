using API.Application.Features.Project.Commands;
using API.Filters;
using API.Middlewares;
using API.Shared.Models;
using MediatR;

namespace API.EndPoints.Project.Delete;

public class DeleteProjectEndpoint : EndpointDefinition
{
    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapDelete("/projects/{projectId:long}",
            async (long projectId, IMediator mediator, CancellationToken cancellationToken) =>
            {
                var result = await mediator.Send(new DeleteProjectCommand(projectId), cancellationToken);

                return Response(result);
            })
        .WithTags("Project")
        .AddEndpointFilter<JwtEndpointFilter>()
        .Produces<EndPointResponse<bool>>();
    }
}
