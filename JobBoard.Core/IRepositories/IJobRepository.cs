using JobBoard.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Core.IRepositories
{
    public interface IJobRepository
    {
        Task<Job> GetJobAsync(long id);
        Task<QueryResult<Job>> GetJobsAsync(JobQuery queryObj);
        Task AddAsync(Job job);
        void Edit(Job job);
        void Delete(Job job);
        Task<IList<Job>> GetJobsByPodId(int podId);
        void MassDelete(IList<Job> jobsToDelete);
        Task MassExpire(int podId);
        Task<IList<Job>> GetJobsForEverGreenReport();
        Task<IList<Job>> GetJobsForActiveReport(ReportQuery reportQuery);
        Task<IList<Job>> GetJobsForInActiveReport(ReportQuery reportQuery);
        Task<IList<Job>> GetJobsForCreatedByReport(ReportQuery reportQuery);
    }
}
