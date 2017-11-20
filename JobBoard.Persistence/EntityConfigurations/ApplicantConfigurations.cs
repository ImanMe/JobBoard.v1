using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class ApplicantConfigurations : IEntityTypeConfiguration<Applicant>
    {
        public void Configure(EntityTypeBuilder<Applicant> builder)
        {
            builder.Property(a => a.FirstName)
                .IsRequired()
                .HasMaxLength(120);

            builder.Property(a => a.LastName)
                .IsRequired()
                .HasMaxLength(120);

            builder.Property(a => a.Email)
                .IsRequired()
                .HasMaxLength(120);

            builder.Property(a => a.Phone)
                .HasMaxLength(10);

            builder.Property(a => a.Date)
                .HasColumnType("date");
        }
    }
}
