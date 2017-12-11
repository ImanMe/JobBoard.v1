using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Admin.Enums;
using JobBoard.Admin.Services;
using JobBoard.Core;
using JobBoard.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Admin.Controllers
{
    [Route("api/reports")]
    [AllowAnonymous]
    public class ReportsController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IExcelService _excelService;

        public ReportsController(IUnitOfWork unitOfWork, IMapper mapper, IExcelService excelService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _excelService = excelService;
        }

        [HttpGet]
        public async Task<IActionResult> Get(ReportQueryDto reportQueryDto)
        {
            var reportQuery = _mapper.Map<ReportQuery>(reportQueryDto);

            var jobs = await _unitOfWork.Jobs.GetJobsForReport(reportQuery);

            var jobsDto = _mapper.Map<IList<ReportDto>>(jobs);

            var reportBytes = _excelService.CreateExcelPackage(jobsDto);

            return File(reportBytes, ExcelEnums.XlsxContentType,
                reportQuery.ReportType + ExcelEnums.ExcelExtension);
        }
    }
}
