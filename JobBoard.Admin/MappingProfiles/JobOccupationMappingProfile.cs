using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class JobOccupationMappingProfile : Profile
    {
        public JobOccupationMappingProfile()
        {
            CreateMap<JobOccupation, JobOccupationDto>();
            CreateMap<JobOccupationDto, JobOccupation>();
        }
    }
}
