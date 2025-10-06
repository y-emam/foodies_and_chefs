using System.ComponentModel.DataAnnotations;

namespace API.Domain.Entities
{
    public class Project : BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [MaxLength(300)]
        public string ShortDescription { get; set; }

        [Required]
        public string DetailedDescription { get; set; }

        [Required]
        public string CoverImageUrl { get; set; }

        public string? ProjectUrl { get; set; }

        [Required]
        public string Technologies { get; set; }

        public DateTime PublishDate { get; set; }


        public ICollection<ProjectImage> GalleryImages { get; set; } // <-- قائمة صور المعرض
    }

    public class ProjectImage : BaseEntity
    {
        [Required]
        public string ImageUrl { get; set; } 

        public long ProjectId { get; set; }  
        public Project Project { get; set; }
    }
}
