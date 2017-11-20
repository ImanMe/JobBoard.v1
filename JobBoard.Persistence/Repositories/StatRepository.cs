using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class StatRepository : IStatRepository
    {
        private readonly JobBoardContext _context;

        public StatRepository(JobBoardContext context)
        {
            _context = context;

            _context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }
        public async Task<Stat> GetStatByJobIdAsync(int jobId)
        {
            return await _context.Stats.FirstOrDefaultAsync(s => s.JobId == jobId);
        }

        //public async Task AddAsync(IEnumerable<Stat> stats)
        //{
        //    await _context.Stats.AddRangeAsync(stats);
        //}

        public async Task AddAsync(Stat stat)
        {
            await _context.Stats.AddAsync(stat);
        }

        public void Edit(Stat stat)
        {
            _context.UpdateRange(stat);
        }
    }
}
