using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class CountryMappingProfile : Profile
    {
        public CountryMappingProfile()
        {
            CreateMap<Country, CountryDto>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.CountryName))
            .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.CountryCode));
        }
    }
}
