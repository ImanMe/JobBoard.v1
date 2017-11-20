using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Core.Models;
using System;
using System.Linq;

namespace JobBoard.Admin.MappingProfiles
{
    public class JobMappingProfile : Profile
    {
        public JobMappingProfile()
        {
            CreateMap<Job, JobDto>()
                .ForMember(dest => dest.JobBoard, opt => opt.MapFrom(src => src.JobBoard.JobBoardName))
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category.CategoryName))
                .ForMember(dest => dest.EmploymentType, opt => opt.MapFrom(src => src.EmploymentType.Name))
                .ForMember(dest => dest.SalaryType, opt => opt.MapFrom(src => src.SalaryType.Name))
                .ForMember(dest => dest.Country, opt => opt.MapFrom(src => src.Country.CountryCode))
                .ForMember(dest => dest.State, opt => opt.MapFrom(src => src.State.StateName))
                .ForMember(dest => dest.IsActive, opt => opt.MapFrom(src => src.ExpirationDate >= DateTime.Now))
                .ForMember(dest => dest.ActivationDate,
                    opt => opt.MapFrom(src => src.ActivationDate.Date.ToShortDateString()))
                .ForMember(dest => dest.CreatedDate,
                    opt => opt.MapFrom(src => src.CreatedDate.Date.ToShortDateString()))
                .ForMember(dest => dest.ExpirationDate,
                    opt => opt.MapFrom(src => src.ExpirationDate.Date.ToShortDateString()))
                .ForMember(dest => dest.EditedDate, opt => opt.ResolveUsing(src =>
                {
                    var dt = src.EditedDate;
                    return dt?.ToShortDateString();
                }));

            CreateMap<Job, JobCreateDto>()
                .ForMember(dest => dest.SelectedOccupation,
                    opt => opt.MapFrom(
                        src => src.Occupations.Select(jo => jo.OccupationId)))
            .ForMember(dest => dest.ActivationDate,
                opt => opt.MapFrom(src => src.ActivationDate.ToString("MM/dd/yyyy")))
            .ForMember(dest => dest.ExpirationDate,
                opt => opt.MapFrom(src => src.ExpirationDate.ToString("MM/dd/yyyy")));

            CreateMap<JobCreateDto, Job>()
                .ForMember(dest => dest.Occupations,
                    opt => opt.MapFrom(
                        src => src.SelectedOccupation.Select(jo => new JobOccupation { OccupationId = jo })))
                .ForMember(dest => dest.ActivationDate,
                    opt => opt.MapFrom(src => DateTime.Parse(src.ActivationDate)))
                .ForMember(dest => dest.ExpirationDate,
                    opt => opt.MapFrom(src => DateTime.Parse(src.ExpirationDate)));

            CreateMap<JobUpdateDto, Job>()
                .ForMember(dest => dest.ActivationDate,
                    opt => opt.MapFrom(src => DateTime.Parse(src.ActivationDate)))
                .ForMember(dest => dest.ExpirationDate,
                    opt => opt.MapFrom(src => DateTime.Parse(src.ExpirationDate)))
                .ForMember(v => v.Occupations, opt => opt.Ignore())
                .AfterMap((vr, v) =>
                {
                    // Remove unselected features
                    var removedFeatures = v.Occupations.Where(f => !vr.Occupations.Contains(f.OccupationId)).ToList();
                    foreach (var f in removedFeatures)
                        v.Occupations.Remove(f);

                    // AddAsync new features
                    var addedFeatures = vr.Occupations.Where(id => v.Occupations.All(f => f.OccupationId != id)).Select(id => new JobOccupation() { OccupationId = id }).ToList();
                    foreach (var f in addedFeatures)
                        v.Occupations.Add(f);
                });
        }
    }
}
