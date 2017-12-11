using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class JobConfigurations : IEntityTypeConfiguration<Job>
    {
        public void Configure(EntityTypeBuilder<Job> builder)
        {
            builder.HasOne(j => j.State).WithMany().OnDelete(DeleteBehavior.Restrict);

            builder.Property(j => j.Title)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(j => j.JobDescription)
                .IsRequired()
                .HasMaxLength(int.MaxValue);

            builder.Property(j => j.JobRequirements)
                .IsRequired()
                .HasMaxLength(int.MaxValue);

            builder.Property(j => j.EmailTo)
                .HasMaxLength(120);

            builder.Property(j => j.ZipCode)
                .IsRequired()
                .HasMaxLength(10);

            builder.Property(j => j.City)
                .IsRequired()
                .HasMaxLength(60);

            builder.Property(j => j.Address)
                .HasMaxLength(1200);

            builder.Property(j => j.IsEverGreen)
                .IsRequired();

            builder.Property(j => j.SchedulingPod)
                .IsRequired();

            builder.Property(j => j.OfficeId)
                .IsRequired();

            builder.Property(j => j.CompanyName)
                .IsRequired()
                .HasMaxLength(120);

            builder.Property(j => j.ActivationDate)
                .IsRequired()
                .HasColumnType("date");

            builder.Property(j => j.ExpirationDate)
                .IsRequired()
                .HasColumnType("date");

            builder.Property(j => j.CreatedBy)
                .IsRequired()
                .HasMaxLength(120);

            builder.Property(j => j.CreatedDate)
                .IsRequired()
                .HasColumnType("date");

            builder.Property(j => j.EditedBy)
                .HasMaxLength(120);

            builder.Property(j => j.EditedDate)
                .HasColumnType("date");

            builder.Property(j => j.Division)
                .IsRequired()
                .HasMaxLength(120);

            builder.Property(j => j.Currency)
                .HasMaxLength(120);

            builder.Property(j => j.IsBestPerforming)
                .IsRequired();

            builder.Property(j => j.JobBoardId)
                .IsRequired();

            builder.Property(j => j.CountryId)
                .IsRequired();

            builder.Property(j => j.StateId)
                .IsRequired();

            builder.Property(j => j.EmploymentTypeId)
                .IsRequired();

            builder.Property(j => j.SalaryTypeId)
                .IsRequired();

            builder.Property(j => j.Tags)
                .HasMaxLength(255);

            builder.HasOne(j => j.Stat)
                .WithOne(s => s.Job)
                .HasForeignKey<Stat>(s => s.JobId);

            builder.Ignore(j => j.HasStat);

            builder.Ignore(j => j.ActiveForThisWk);
        }
    }
}
