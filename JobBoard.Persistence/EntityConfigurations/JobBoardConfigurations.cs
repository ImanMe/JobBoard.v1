using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class JobBoardConfigurations : IEntityTypeConfiguration<Core.Models.JobBoard>
    {
        public void Configure(EntityTypeBuilder<Core.Models.JobBoard> builder)
        {
            builder.Property(j => j.JobBoardName)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(j => j.IsEmailApply)
                .IsRequired();

            builder.Property(j => j.IsOnlineApply)
                .IsRequired();

            builder.Property(j => j.EstreamJbsId)
                .HasColumnName("EstreamJBsID ");
        }
    }
}
