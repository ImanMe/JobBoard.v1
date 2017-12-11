using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class ReportQueryMappingProfile : Profile
    {
        public ReportQueryMappingProfile()
        {
            CreateMap<ReportQueryDto, ReportQuery>();
        }
    }
}
