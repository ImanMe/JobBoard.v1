using AutoMapper;
using JobBoard.Admin.DTOs;
using Microsoft.AspNetCore.Identity;

namespace JobBoard.Admin.MappingProfiles
{
    public class RoleMappingProfile : Profile
    {
        public RoleMappingProfile()
        {
            CreateMap<IdentityRole, RoleDto>().ReverseMap();
        }
    }
}
