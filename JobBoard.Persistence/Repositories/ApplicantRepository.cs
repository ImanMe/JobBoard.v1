using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class ApplicantRepository : IApplicantRepositroy
    {
        private readonly JobBoardContext _context;

        public ApplicantRepository(JobBoardContext context)
        {
            _context = context;

            context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task<IEnumerable<Applicant>> GetApplicantsAsync()
        {
            return await _context.Applicants.ToListAsync();
        }
    }
}
