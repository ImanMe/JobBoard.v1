using JobBoard.Core;
using JobBoard.Core.IRepositories;
using System.Threading.Tasks;

namespace JobBoard.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(ICountryRepository countries, JobBoardContext context, IStateRepository states, ICategoryRepository categories, IOccupationRepository occupations, IApplicantRepositroy applicants, IJobBoardRepository jobBoards, IJobRepository jobs, ISalaryTypeRepository salaryTypes, IEmploymentRepository employmentTypes, IJobOccupationRepository jobOccupations, IStatRepository stats, IUserRepository users)
        {
            _context = context;

            Countries = countries;
            States = states;
            Categories = categories;
            Occupations = occupations;
            Applicants = applicants;
            JobBoards = jobBoards;
            Jobs = jobs;
            SalaryTypes = salaryTypes;
            EmploymentTypes = employmentTypes;
            JobOccupations = jobOccupations;
            Stats = stats;
            Users = users;
        }

        private readonly JobBoardContext _context;
        public ICountryRepository Countries { get; }
        public IStateRepository States { get; }
        public ICategoryRepository Categories { get; }
        public IOccupationRepository Occupations { get; }
        public IApplicantRepositroy Applicants { get; }
        public IJobBoardRepository JobBoards { get; }
        public IJobRepository Jobs { get; }
        public ISalaryTypeRepository SalaryTypes { get; }
        public IEmploymentRepository EmploymentTypes { get; }
        public IJobOccupationRepository JobOccupations { get; }
        public IStatRepository Stats { get; }
        public IUserRepository Users { get; }

        public async Task<int> CompleteAsync()
        {
            var result = await _context.SaveChangesAsync();
            return result;
        }
    }
}
