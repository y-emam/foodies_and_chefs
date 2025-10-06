using API.Application.Features.Project.Commands;
using API.Filters;
using API.Middlewares;
using API.Shared.Models;
using MediatR;

namespace API.EndPoints.Project.Update;

public class UpdateProjectEndpoint : EndpointDefinition
{
    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapPut("/projects/{projectId:long}",
            async (long projectId, IMediator mediator, UpdateProjectRequest request, CancellationToken cancellationToken) =>
            {
                var result = await mediator.Send(new UpdateProjectCommand(
                    projectId,
                    request.Title,
                    request.ShortDescription,
                    request.DetailedDescription,
                    request.CoverImageUrl,
                    request.ProjectUrl,
                    request.Technologies,
                    request.PublishDate,
                    request.GalleryImageUrls), cancellationToken);

                return Response(result);
            })
        .WithTags("Project")
        .AddEndpointFilter<JwtEndpointFilter>()
        .AddEndpointFilter<ValidationFilter<UpdateProjectRequest>>()
        .Produces<EndPointResponse<bool>>();
    }
}
