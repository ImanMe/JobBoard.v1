using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class SalaryTypeMappingProfile : Profile
    {
        public SalaryTypeMappingProfile()
        {
            CreateMap<SalaryType, SalaryTypeDto>();
        }
    }
}
