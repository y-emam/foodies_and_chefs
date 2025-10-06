using API.Application.Features.Project.Commands;
using API.Filters;
using API.Middlewares;
using API.Shared.Models;
using MediatR;

namespace API.EndPoints.Project.Create;

public class CreateProjectEndpoint : EndpointDefinition
{
    public override void RegisterEndpoints(IEndpointRouteBuilder app)
    {
        app.MapPost("/projects",
            async (IMediator mediator, CreateProjectRequest request, CancellationToken cancellationToken) =>
            {
                var result = await mediator.Send(new CreateProjectCommand(
                    request.Title,
                    request.ShortDescription,
                    request.DetailedDescription,
                    request.CoverImageUrl,
                    request.ProjectUrl,
                    request.Technologies,
                    //request.PublishDate,
                    request.GalleryImageUrls), cancellationToken);

                return Response(result);
            })
        .WithTags("Project")
       // .AddEndpointFilter<JwtEndpointFilter>()
        .AddEndpointFilter<ValidationFilter<CreateProjectRequest>>()
        .Produces<EndPointResponse<long>>();
    }
}
