using FluentValidation;
using JobBoard.Admin.DTOs;

namespace JobBoard.Admin.Validations
{
    public class JobBoardUpdateDtoValidator : AbstractValidator<JobBoardUpdateDto>
    {
        public JobBoardUpdateDtoValidator()
        {
            RuleFor(reg => reg.Name).NotEmpty().MaximumLength(255);
            RuleFor(reg => reg.Id).NotEmpty();
        }
    }
}
