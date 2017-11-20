using FluentValidation;
using JobBoard.Admin.DTOs;

namespace JobBoard.Admin.Validations
{
    public class JobBoardCreateDtoValidator : AbstractValidator<JobBoardCreateDto>
    {
        public JobBoardCreateDtoValidator()
        {
            RuleFor(reg => reg.Name).NotEmpty().MaximumLength(255);
        }
    }
}
