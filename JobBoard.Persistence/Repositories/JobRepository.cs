using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using JobBoard.Persistence.Extensions;
using JobBoard.Persistence.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class JobRepository : IJobRepository
    {
        private readonly JobBoardContext _context;

        public JobRepository(JobBoardContext context)
        {
            _context = context;

            _context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task<Job> GetJobAsync(long id)
        {
            var job = await _context.Jobs
                .Include(j => j.Country)
                .Include(j => j.State)
                .Include(j => j.EmploymentType)
                .Include(j => j.SalaryType)
                .Include(j => j.Category)
                .Include(j => j.JobBoard)
                .Include(j => j.Stat)
                .Include(j => j.Occupations)
                .ThenInclude(e => e.Occupation)
                .FirstOrDefaultAsync(j => j.Id == id);

            return job;
        }

        public async Task<QueryResult<Job>> GetJobsAsync(JobQuery queryObj)
        {
            var result = new QueryResult<Job>();

            var query = _context.Jobs
                .Include(j => j.Country)
                .Include(j => j.State)
                .Include(j => j.EmploymentType)
                .Include(j => j.SalaryType)
                .Include(j => j.Category)
                .Include(j => j.JobBoard)
                .Include(j => j.Stat)
                .AsQueryable();

            query = query.ApplyFiltering(queryObj);

            query = query.SortBasedOnListType(queryObj);

            var columnsMap = ColumnsMap.CreateColumnsMap();

            query = query.ApplyOrdering(queryObj, columnsMap);

            result.TotalItems = await query.CountAsync();

            query = query.ApplyPaging(queryObj);

            result.Items = await query.ToListAsync();

            return result;
        }

        public async Task AddAsync(Job job)
        {
            await _context.Jobs.AddAsync(job);
            _context.ChangeTracker.DetectChanges();
        }

        public void Edit(Job job)
        {
            _context.Update(job);
            _context.ChangeTracker.DetectChanges();
        }

        public void Delete(Job job)
        {
            _context.Entry(job).State = EntityState.Deleted;
            _context.ChangeTracker.DetectChanges();
        }
    }
}
