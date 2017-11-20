using JobBoard.Core.Interfaces;
using JobBoard.Core.IRepositories;
using JobBoard.Core.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<JobBoardUser> _userManager;
        private readonly SignInManager<JobBoardUser> _signInManager;
        private readonly JobBoardContext _context;

        public UserRepository(UserManager<JobBoardUser> userManager, SignInManager<JobBoardUser> signInManager,
            JobBoardContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        public async Task<JobBoardUser> FindUserByEmailId(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }

        public async Task<bool> CreateNewUser(JobBoardUser user, string password)
        {
            return (await _userManager.CreateAsync(user, password))
                .Succeeded;
        }

        public async Task<bool> SignIn(ILogin login)
        {
            return (await _signInManager.PasswordSignInAsync(login.Email, login.Password, login.RememberMe,
                    login.LockoutEnabled))
                .Succeeded;
        }

        public async Task SignOut()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task<IEnumerable<IdentityRole>> GetRoles()
        {
            return await _context.Roles.ToListAsync();
        }

        public async Task<bool> AssignRole(string userId, string role)
        {
            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(role))
                return false;
            var user = await _userManager.FindByIdAsync(userId);
            return user != null && (await _userManager.AddToRoleAsync(user, role)).Succeeded;
        }

        public async Task<IEnumerable<JobBoardUser>> GetAllUsers()
        {
            return await _signInManager.UserManager.Users.ToListAsync();
        }

        public async Task<string> GetRole(JobBoardUser user)
        {
            return (await _userManager.GetRolesAsync(user)).FirstOrDefault();
        }

        public async Task<bool> EditUserRole(JobBoardUser user, string role)
        {
            var currentRole = (await _userManager.GetRolesAsync(user)).FirstOrDefault();
            var removeRoleResult = await _userManager.RemoveFromRoleAsync(user, currentRole);
            if (!removeRoleResult.Succeeded) return removeRoleResult.Succeeded;
            var assignRoleResult = await _userManager.AddToRoleAsync(user, role);
            return assignRoleResult.Succeeded;
        }
    }
}
