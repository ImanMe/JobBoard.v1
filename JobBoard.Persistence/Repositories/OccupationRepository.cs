using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class OccupationRepository : IOccupationRepository
    {
        private readonly JobBoardContext _context;

        public OccupationRepository(JobBoardContext context)
        {
            _context = context;

            context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task<IEnumerable<Occupation>> GetOccupationsAsync()
        {
            return await _context.Occupations.ToListAsync();
        }
    }
}
