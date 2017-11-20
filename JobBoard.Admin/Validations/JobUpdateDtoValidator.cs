using FluentValidation;
using JobBoard.Admin.DTOs;

namespace JobBoard.Admin.Validations
{
    public class JobUpdateDtoValidator : AbstractValidator<JobUpdateDto>
    {
        public JobUpdateDtoValidator()
        {
            RuleFor(reg => reg.Title).NotEmpty().MaximumLength(255);
            RuleFor(reg => reg.JobDescription).NotEmpty();
            RuleFor(reg => reg.JobRequirements).NotEmpty();
            RuleFor(reg => reg.EmailTo).EmailAddress();
            RuleFor(reg => reg.ZipCode).NotEmpty().MaximumLength(10);
            RuleFor(reg => reg.City).NotEmpty().MaximumLength(60);
            RuleFor(reg => reg.Address).MaximumLength(1200);
            RuleFor(reg => reg.SchedulingPod).NotEmpty();
            RuleFor(reg => reg.OfficeId).NotEmpty();
            RuleFor(reg => reg.CompanyName).NotEmpty();
            RuleFor(reg => reg.ActivationDate).NotEmpty();
            RuleFor(reg => reg.ExpirationDate).NotEmpty();
            RuleFor(reg => reg.Division).NotEmpty().MaximumLength(120);
            RuleFor(reg => reg.Currency).MaximumLength(10);
            RuleFor(reg => reg.JobBoardId).NotEmpty();
            RuleFor(reg => reg.CountryId).NotEmpty();
            RuleFor(reg => reg.StateId).NotEmpty();
            RuleFor(reg => reg.EmploymentTypeId).NotEmpty();
            RuleFor(reg => reg.SalaryTypeId).NotEmpty();
            RuleFor(reg => reg.Tags).MaximumLength(255);
            RuleFor(reg => reg.IsBestPerforming).NotNull();
            RuleFor(reg => reg.IsEverGreen).NotNull();
            RuleFor(reg => reg.IsSponsored).NotNull();
        }
    }
}
