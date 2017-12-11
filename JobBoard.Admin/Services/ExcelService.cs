using OfficeOpenXml;
using System.Collections.Generic;

namespace JobBoard.Admin.Services
{
    public class ExcelService : IExcelService
    {
        public byte[] CreateExcelPackage<T>(IEnumerable<T> dataToBeExported)
        {
            var package = new ExcelPackage();

            var worksheet = package.Workbook.Worksheets.Add("worksheetName");

            SetHeader<T>(worksheet);

            SetBody(dataToBeExported, worksheet);

            var reportBytes = package.GetAsByteArray();

            return reportBytes;
        }

        private static void SetHeader<T>(ExcelWorksheet worksheet)
        {
            var headerCount = 1;

            foreach (var header in typeof(T).GetProperties())
            {
                worksheet.Cells[1, headerCount].Value = header.Name;
                headerCount++;
            }
        }

        private static void SetBody<T>(IEnumerable<T> dataToBeExported, ExcelWorksheet worksheet)
        {
            var rowCounter = 2;

            foreach (var v in dataToBeExported)
            {
                var columnCount = 0;
                foreach (var prop in v.GetType().GetProperties())
                {
                    worksheet.Cells[rowCounter, ++columnCount].Value = prop.GetValue(v, null);
                }
                rowCounter++;
            }
        }
    }
}
