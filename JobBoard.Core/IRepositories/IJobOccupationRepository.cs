using JobBoard.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Core.IRepositories
{
    public interface IJobOccupationRepository
    {
        Task AddAsync(IEnumerable<JobOccupation> jobOccupation);
        void Delete(IEnumerable<JobOccupation> jobOccupations);
    }
}
