using System.Collections.Generic;

namespace JobBoard.Admin.Services
{
    public interface IExcelService
    {
        byte[] CreateExcelPackage<T>(IEnumerable<T> dataToBeExported);
    }
}
