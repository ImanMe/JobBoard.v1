using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class JobQueryMappingProfile : Profile
    {
        public JobQueryMappingProfile()
        {
            CreateMap<JobQueryDto, JobQuery>();
        }
    }
}
