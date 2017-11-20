using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class JobBoardRepository : IJobBoardRepository
    {
        private readonly JobBoardContext _context;

        public JobBoardRepository(JobBoardContext context)
        {
            _context = context;

            _context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task<IEnumerable<Core.Models.JobBoard>> GetJobBoards()
        {
            return await _context.JobBoards.ToListAsync();
        }

        public async Task<Core.Models.JobBoard> GetJobBoardAsync(int id)
        {
            return await _context.JobBoards.FindAsync(id);
        }

        public async Task AddAsync(Core.Models.JobBoard jobBoard)
        {
            await _context.JobBoards.AddAsync(jobBoard);
            _context.ChangeTracker.DetectChanges();
        }

        public void Delete(Core.Models.JobBoard jobBoard)
        {
            _context.Entry(jobBoard).State = EntityState.Deleted;
            _context.ChangeTracker.DetectChanges();
        }

        public void Edit(Core.Models.JobBoard jobBoard)
        {
            _context.Entry(jobBoard).State = EntityState.Modified;
            _context.ChangeTracker.DetectChanges();
        }
    }
}
