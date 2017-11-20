using AutoMapper;
using FluentValidation.AspNetCore;
using JobBoard.Admin.Validations;
using JobBoard.Core;
using JobBoard.Core.IRepositories;
using JobBoard.Core.Models;
using JobBoard.Persistence;
using JobBoard.Persistence.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace JobBoard.Admin.Extensions
{
    public static class StartupExtensions
    {
        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IStateRepository, StateRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IOccupationRepository, OccupationRepository>();
            services.AddScoped<IApplicantRepositroy, ApplicantRepository>();
            services.AddScoped<ISalaryTypeRepository, SalaryTypeRepository>();
            services.AddScoped<IEmploymentRepository, EmploymentTypeRepository>();
            services.AddScoped<IJobBoardRepository, JobBoardRepository>();
            services.AddScoped<IJobRepository, JobRepository>();
            services.AddScoped<IJobOccupationRepository, JobOccupationRepository>();
            services.AddScoped<IStatRepository, StatRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            //services.AddTransient<JobBoardInitializer>();
            services.AddDbContext<JobBoardContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("JobBoardConnection")));
            services.AddAutoMapper();
            services.AddCors();
            services.AddIdentity<JobBoardUser, IdentityRole>(
                config =>
                {
                    config.User.RequireUniqueEmail = true;
                    config.Password.RequireDigit = false;
                    config.Password.RequireNonAlphanumeric = false;
                    config.Password.RequireUppercase = false;
                    config.Password.RequireLowercase = false;
                })
                .AddEntityFrameworkStores<JobBoardContext>();

            services.AddMvc()
                .AddFluentValidation(fvc =>
                    fvc.RegisterValidatorsFromAssemblyContaining<JobBoardCreateDtoValidator>());
            return services;
        }
    }
}
