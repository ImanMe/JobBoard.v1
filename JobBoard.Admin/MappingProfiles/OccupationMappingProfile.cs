using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class OccupationMappingProfile : Profile
    {
        public OccupationMappingProfile()
        {
            CreateMap<Occupation, OccupationDto>()
               .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.OccupationName));
        }
    }
}
