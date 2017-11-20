using Microsoft.AspNetCore.Identity;

namespace JobBoard.Core.Models
{
    public class JobBoardUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
