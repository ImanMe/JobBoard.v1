using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Core.IRepositories
{
    public interface IJobBoardRepository
    {
        Task<IEnumerable<Models.JobBoard>> GetJobBoards();
        Task<Models.JobBoard> GetJobBoardAsync(int id);
        Task AddAsync(Models.JobBoard jobBoard);
        void Edit(Models.JobBoard jobBoard);
        void Delete(Models.JobBoard jobBoard);
    }
}
