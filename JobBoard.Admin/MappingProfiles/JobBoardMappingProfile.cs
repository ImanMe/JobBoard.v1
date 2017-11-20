using AutoMapper;
using JobBoard.Admin.DTOs;

namespace JobBoard.Admin.MappingProfiles
{
    public class JobBoardMappingProfile : Profile
    {
        public JobBoardMappingProfile()
        {
            CreateMap<Core.Models.JobBoard, JobBoardDto>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.JobBoardName));

            CreateMap<JobBoardCreateDto, Core.Models.JobBoard>()
                .ForMember(dest => dest.JobBoardName, opt => opt.MapFrom(src => src.Name));

            CreateMap<JobBoardUpdateDto, Core.Models.JobBoard>()
                .ForMember(dest => dest.JobBoardName, opt => opt.MapFrom(src => src.Name));
        }
    }
}
