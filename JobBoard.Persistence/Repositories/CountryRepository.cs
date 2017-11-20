using JobBoard.Core.Models;
using JobBoard.Core.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBoard.Persistence.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly JobBoardContext _context;

        public CountryRepository(JobBoardContext context)
        {
            _context = context;

            context.ChangeTracker.QueryTrackingBehavior
                = QueryTrackingBehavior.NoTracking;
        }

        public async Task<IEnumerable<Country>> GetCountriesAsync()
        {
            return await _context.Countries
                .OrderBy(c => c.CountryName)
               .ToListAsync();
        }

        public async Task<IEnumerable<Country>> GetCountriesWithStatesAsync()
        {
            return await _context.Countries
                .Include(c => c.States)
                .ToListAsync();
        }

        public async Task<Country> GetCountryAsync(int id)
        {
            return await _context.Countries.FindAsync(id);
        }
    }
}
