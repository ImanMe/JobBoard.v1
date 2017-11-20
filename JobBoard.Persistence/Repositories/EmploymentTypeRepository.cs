using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class EmploymentTypeRepository : IEmploymentRepository
    {
        private readonly JobBoardContext _context;

        public EmploymentTypeRepository(JobBoardContext context)
        {
            _context = context;

            context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task<IEnumerable<EmploymentType>> GetEmploymentTypesAsync()
        {
            return await _context.EmploymentTypes.ToListAsync();
        }
    }
}
