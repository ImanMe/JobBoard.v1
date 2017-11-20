using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class CountryConfigurations : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.Property(c => c.CountryName)
                .IsRequired()
                .HasMaxLength(60);

            builder.Property(c => c.CountryCode)
                .IsRequired()
                .HasMaxLength(12);

            builder.HasMany(c => c.States);
        }
    }
}
