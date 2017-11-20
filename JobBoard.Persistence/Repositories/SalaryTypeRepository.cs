using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class SalaryTypeRepository : ISalaryTypeRepository
    {
        private readonly JobBoardContext _context;

        public SalaryTypeRepository(JobBoardContext context)
        {
            _context = context;

            context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task<IEnumerable<SalaryType>> GetSalaryTypesAsync()
        {
            return await _context.SalaryTypes.ToListAsync();
        }
    }
}
