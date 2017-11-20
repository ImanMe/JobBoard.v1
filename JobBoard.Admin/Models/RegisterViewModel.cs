using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace JobBoard.Admin.Models
{
    public class RegisterViewModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        [DisplayName("Confirm Password")]
        public string ConfirmPassword { get; set; }
    }
}
