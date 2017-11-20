using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class OccupationCofigurations : IEntityTypeConfiguration<Occupation>
    {
        public void Configure(EntityTypeBuilder<Occupation> builder)
        {
            builder.Property(o => o.OccupationName)
                .IsRequired()
                .HasMaxLength(120);

            builder.Property(o => o.OccupationCategory)
                .IsRequired()
                .HasMaxLength(120);

            builder.Ignore(o => o.FullOccupationName);

        }
    }
}
