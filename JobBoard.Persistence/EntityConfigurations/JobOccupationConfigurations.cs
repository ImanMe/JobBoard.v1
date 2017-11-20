using JobBoard.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobBoard.Persistence.EntityConfigurations
{
    public class JobOccupationConfigurations : IEntityTypeConfiguration<JobOccupation>
    {
        public void Configure(EntityTypeBuilder<JobOccupation> builder)
        {
            builder.HasKey(jo => new { jo.JobId, jo.OccupationId });
        }
    }
}
