using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Admin.Models;
using JobBoard.Core;
using JobBoard.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Admin.Controllers
{
    [AllowAnonymous]
    public class AccountController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AccountController(
            ILogger<AccountController> logger,
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [AllowAnonymous]

        public ActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                RedirectToAction("Index", "Home");
            }

            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Login(LoginViewModel viewModel)
        {
            if (!ModelState.IsValid) return View();

            var login = _mapper.Map<Login>(viewModel);

            var result = await _unitOfWork.Users.SignIn(login);

            if (result) return RedirectToAction("Index", "Home");

            ModelState.AddModelError("", "Username or Password is not correct");

            return View();
        }

        public async Task<IActionResult> Logout()
        {
            await _unitOfWork.Users.SignOut();
            return RedirectToAction("Index", "Home");
        }

        public IActionResult Roles()
        {
            var roles = _unitOfWork.Users.GetRoles();

            var mappedRoles = _mapper.Map<IEnumerable<RoleDto>>(roles.Result);

            return Ok(mappedRoles);

        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterDto register)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = await _unitOfWork.Users.FindUserByEmailId(register.Email);

            if (user != null)
                //ModelState.AddModelError("", "Username with this email already exist.");
                return BadRequest("Username with this email already exist.");

            var newUser = _mapper.Map<JobBoardUser>(register);

            await _unitOfWork.Users.CreateNewUser(newUser, register.Password);

            await _unitOfWork.CompleteAsync();

            await _unitOfWork.Users.AssignRole(newUser.Id, register.RoleName);

            await _unitOfWork.CompleteAsync();

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetUsersWithRoles()
        {
            var userList = new List<UserWithRoleDto>();

            var users = await _unitOfWork.Users.GetAllUsers();
            foreach (var user in users)
            {
                var jobBoardUser = new UserWithRoleDto
                {
                    UserName = user.Email,
                    Role = await _unitOfWork.Users.GetRole(user)
                };

                userList.Add(jobBoardUser);
            }

            return Ok(userList);
        }

        [HttpPost]
        public async Task<IActionResult> EditUserRole([FromBody]EditUserRoleDto userRole)
        {
            if (userRole?.Email == null || userRole.Role == null)
            {
                return BadRequest();
            }

            var user = await _unitOfWork.Users.FindUserByEmailId(userRole.Email);

            if (user == null) return BadRequest();

            var result = await _unitOfWork.Users.EditUserRole(user, userRole.Role);

            if (!result) BadRequest();

            await _unitOfWork.CompleteAsync();

            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetUserByEmail([FromRoute]string id)
        {
            if (string.IsNullOrWhiteSpace(id))
                return BadRequest();

            var user = await _unitOfWork.Users.FindUserByEmailId(id);

            var result = _mapper.Map<EditUserRoleDto>(user);

            result.Role = await _unitOfWork.Users.GetRole(user);

            return Ok(result);
        }
    }
}
