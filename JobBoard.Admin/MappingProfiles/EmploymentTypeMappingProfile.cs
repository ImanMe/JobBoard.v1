using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class EmploymentTypeMappingProfile : Profile
    {
        public EmploymentTypeMappingProfile()
        {
            CreateMap<EmploymentType, EmploymentTypeDto>();
        }
    }
}
