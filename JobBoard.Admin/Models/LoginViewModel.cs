using JobBoard.Core.Interfaces;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace JobBoard.Admin.Models
{
    public class LoginViewModel : ILogin
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [DisplayName("Keep me logged in")]
        public bool RememberMe { get; set; } = true;

        public bool LockoutEnabled { get; set; } = false;
    }
}
