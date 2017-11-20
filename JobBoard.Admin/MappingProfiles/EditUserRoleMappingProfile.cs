using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class EditUserRoleMappingProfile : Profile
    {
        public EditUserRoleMappingProfile()
        {
            CreateMap<EditUserRoleDto, JobBoardUser>().ReverseMap();
        }
    }
}
