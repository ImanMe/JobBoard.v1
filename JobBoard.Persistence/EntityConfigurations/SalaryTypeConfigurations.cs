using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class SalaryTypeConfigurations : IEntityTypeConfiguration<SalaryType>
    {
        public void Configure(EntityTypeBuilder<SalaryType> builder)
        {
            builder.Property(s => s.Name)
                .IsRequired();
        }
    }
}
