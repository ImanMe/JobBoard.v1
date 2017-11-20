using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace JobBoard.Persistence.EntityConfigurations
{
    public class StateConfigurations : IEntityTypeConfiguration<State>
    {
        public void Configure(EntityTypeBuilder<State> builder)
        {
            builder.Property(s => s.StateName)
                .IsRequired()
                .HasMaxLength(60);

            builder.Property(s => s.StateCode)
                .IsRequired()
                .HasMaxLength(12);

            builder.Property(s => s.CountryId)
                .IsRequired();
        }
    }
}
