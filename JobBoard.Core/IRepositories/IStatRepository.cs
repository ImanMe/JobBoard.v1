using JobBoard.Core.Models;
using System.Threading.Tasks;

namespace JobBoard.Core.IRepositories
{
    public interface IStatRepository
    {
        Task<Stat> GetStatByJobIdAsync(int jobId);
        //Task AddAsync(IEnumerable<Stat> stats);
        Task AddAsync(Stat stat);
        void Edit(Stat stat);
    }
}
