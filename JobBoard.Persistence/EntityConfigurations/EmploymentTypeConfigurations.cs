using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class EmploymentTypeConfigurations : IEntityTypeConfiguration<EmploymentType>
    {
        public void Configure(EntityTypeBuilder<EmploymentType> builder)
        {
            builder.Property(e => e.Name)
                .IsRequired();
        }
    }
}
