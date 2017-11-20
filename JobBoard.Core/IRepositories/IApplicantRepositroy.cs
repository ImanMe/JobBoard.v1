using JobBoard.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Core.IRepositories
{
    public interface IApplicantRepositroy
    {
        Task<IEnumerable<Applicant>> GetApplicantsAsync();
    }
}
