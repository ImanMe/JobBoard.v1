using FluentValidation;
using JobBoard.Admin.DTOs;

namespace JobBoard.Admin.Validations
{
    public class RegisterDtoValidator : AbstractValidator<RegisterDto>
    {
        public RegisterDtoValidator()
        {
            RuleFor(reg => reg.Email).NotEmpty();
            RuleFor(reg => reg.Password).NotEmpty().MinimumLength(6);
            RuleFor(reg => reg.ConfirmPassword).NotEmpty().MinimumLength(6);
            RuleFor(reg => reg.Password)
                .Equal(reg => reg.ConfirmPassword)
                .WithMessage("You failed to confirm your password correctly.");

        }
    }
}
