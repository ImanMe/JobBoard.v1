using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;

namespace JobBoard.Admin.MappingProfiles
{
    public class QueryResultMappingProfile : Profile
    {
        public QueryResultMappingProfile()
        {
            CreateMap(typeof(QueryResult<>), typeof(QueryResultDto<>));
        }
    }
}
