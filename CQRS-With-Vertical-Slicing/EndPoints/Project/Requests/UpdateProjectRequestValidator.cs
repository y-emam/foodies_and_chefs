using API.EndPoints.Project.Update;
using FluentValidation;

namespace API.EndPoints.Project;

public class UpdateProjectRequestValidator : AbstractValidator<UpdateProjectRequest>
{
    public UpdateProjectRequestValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("Title is required")
            .MaximumLength(100).WithMessage("Title cannot exceed 100 characters");

        RuleFor(x => x.ShortDescription)
            .NotEmpty().WithMessage("Short description is required")
            .MaximumLength(300).WithMessage("Short description cannot exceed 300 characters");

        RuleFor(x => x.DetailedDescription)
            .NotEmpty().WithMessage("Detailed description is required");

        RuleFor(x => x.CoverImageUrl)
            .NotEmpty().WithMessage("Cover image URL is required")
            .Must(BeAValidUrl).WithMessage("Cover image URL must be a valid URL");

        RuleFor(x => x.ProjectUrl)
            .Must(BeAValidUrl).When(x => !string.IsNullOrEmpty(x.ProjectUrl))
            .WithMessage("Project URL must be a valid URL");

        RuleFor(x => x.Technologies)
            .NotEmpty().WithMessage("Technologies is required");

        RuleFor(x => x.PublishDate)
            .NotEmpty().WithMessage("Publish date is required")
            .LessThanOrEqualTo(DateTime.Now).WithMessage("Publish date cannot be in the future");

        RuleForEach(x => x.GalleryImageUrls)
            .Must(BeAValidUrl).When(x => x.GalleryImageUrls != null)
            .WithMessage("Gallery image URLs must be valid URLs");
    }

    private static bool BeAValidUrl(string? url)
    {
        if (string.IsNullOrEmpty(url))
            return true;

        return Uri.TryCreate(url, UriKind.Absolute, out var result) &&
               (result.Scheme == Uri.UriSchemeHttp || result.Scheme == Uri.UriSchemeHttps);
    }
}
