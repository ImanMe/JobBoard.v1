using JobBoard.Core.IRepositories;
using JobBoard.Core.Models;
using JobBoard.Persistence.Extensions;
using JobBoard.Persistence.Helpers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public async Task<IList<Job>> GetJobsByPodId(int podId)
        {
            var jobs = await _context.Jobs
                .Where(j => j.SchedulingPod == podId)
                .ToListAsync();

            return jobs;
        }

        public void MassDelete(IList<Job> jobsToDelete)
        {
            _context.Jobs.RemoveRange(jobsToDelete);

            _context.ChangeTracker.DetectChanges();
        }


        public async Task MassExpire(int podId)
        {
            var oneMonthAgo = DateTime.Now.AddDays(-31);

            var commandText = $@"UPDATE Jobs
                            SET ExpirationDate = '{oneMonthAgo}'
                            WHERE SchedulingPod = {podId}";

            await _context.Database.ExecuteSqlCommandAsync(commandText);
        }

        public async Task<IList<Job>> GetJobsForEverGreenReport()
        {
            return await _context.Jobs
                .Where(j => j.IsEverGreen)
                .Include(j => j.Country)
                .Include(j => j.State)
                .Include(j => j.EmploymentType)
                .Include(j => j.JobBoard)
                .Include(j => j.SalaryType)
                .Include(j => j.Stat)
                .Include(j => j.Category).ToListAsync();
        }

        public async Task<IList<Job>> GetJobsForActiveReport(ReportQuery reportQuery)
        {
            var query = _context.Jobs
                .Include(j => j.Country)
                .Include(j => j.State)
                .Include(j => j.EmploymentType)
                .Include(j => j.SalaryType)
                .Include(j => j.Category)
                .Include(j => j.JobBoard)
                .Include(j => j.Stat)
                .Where(j => j.ExpirationDate > DateTime.Now)
                .Where(j => j.IsEverGreen == false)
                .AsQueryable();

            query = query.ApplyFilteringForActive(reportQuery);

            query = query.SortForActiveReports();

            var result = await query.ToListAsync();

            return result;
        }

        public async Task<IList<Job>> GetJobsForInActiveReport(ReportQuery reportQuery)
        {
            var query = _context.Jobs
                 .Include(m => m.Country)
                 .Include(m => m.State)
                 .Include(m => m.EmploymentType)
                 .Include(m => m.JobBoard)
                 .Include(m => m.SalaryType)
                 .Include(m => m.Category)
                 .AsQueryable();

            query = query.ApplyFilteringForInActive(reportQuery);

            query = query.SortForInActiveReports();

            var result = await query.ToListAsync();

            return result;
        }

        public async Task<IList<Job>> GetJobsForCreatedByReport(ReportQuery reportQuery)
        {
            var query = _context.Jobs
                .Include(m => m.Country)
                .Include(m => m.State)
                .Include(m => m.EmploymentType)
                .Include(m => m.JobBoard)
                .Include(m => m.SalaryType)
                .Include(m => m.Category)
                .AsQueryable();

            query = query.ApplyFilteringForCreatedBy(reportQuery);

            query = query.SortForCreatedByReports();

            var result = await query.ToListAsync();

            return result;
        }
    }
}
