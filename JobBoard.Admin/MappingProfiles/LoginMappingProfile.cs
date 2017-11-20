using AutoMapper;
using JobBoard.Admin.Models;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class LoginMappingProfile : Profile
    {
        public LoginMappingProfile()
        {
            CreateMap<LoginViewModel, Login>()
                .ReverseMap();
        }
    }
}
