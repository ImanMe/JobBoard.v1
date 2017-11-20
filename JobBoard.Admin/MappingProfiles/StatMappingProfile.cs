using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class StatMappingProfile : Profile
    {
        public StatMappingProfile()
        {
            CreateMap<StatDto, Stat>();
            CreateMap<Stat, StatDto>();
            CreateMap<StatCreateDto, Stat>();
            CreateMap<StatUpdateDto, Stat>();
        }
    }
}
