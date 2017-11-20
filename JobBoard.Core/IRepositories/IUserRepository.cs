using JobBoard.Core.Interfaces;
using JobBoard.Core.Models;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Core.IRepositories
{
    public interface IUserRepository
    {
        Task<JobBoardUser> FindUserByEmailId(string email);
        Task<bool> CreateNewUser(JobBoardUser user, string password);
        Task<bool> SignIn(ILogin login);
        Task SignOut();
        Task<IEnumerable<IdentityRole>> GetRoles();
        Task<bool> AssignRole(string id, string role);
        Task<IEnumerable<JobBoardUser>> GetAllUsers();
        Task<string> GetRole(JobBoardUser user);
        Task<bool> EditUserRole(JobBoardUser user, string role);
    }
}
