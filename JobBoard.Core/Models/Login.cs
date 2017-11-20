using JobBoard.Core.Interfaces;

namespace JobBoard.Core.Models
{
    public class Login : ILogin
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
        public bool LockoutEnabled { get; set; }
    }
}
