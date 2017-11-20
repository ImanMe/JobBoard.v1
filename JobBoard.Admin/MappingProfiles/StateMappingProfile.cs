using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class StateMappingProfile : Profile
    {
        public StateMappingProfile()
        {
            CreateMap<State, StateDto>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.StateName))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.StateCode));
        }
    }
}
