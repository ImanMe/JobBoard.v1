using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class JobOccupationRepository : IJobOccupationRepository
    {
        private readonly JobBoardContext _context;

        public JobOccupationRepository(JobBoardContext context)
        {
            _context = context;

            context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task AddAsync(IEnumerable<JobOccupation> jobOccupation)
        {
            await _context.AddRangeAsync(jobOccupation);
            _context.ChangeTracker.DetectChanges();
        }

        public void Delete(IEnumerable<JobOccupation> jobOccupations)
        {
            _context.RemoveRange(jobOccupations);
            _context.ChangeTracker.DetectChanges();
        }
    }
}
