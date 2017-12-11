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
    [Route("api/jobs")]
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

        [HttpGet("everGreen")]
        public async Task<IActionResult> EverGreen()
        {
            var jobs = await _unitOfWork.Jobs.GetJobsForEverGreenReport();

            var jobsDto = _mapper.Map<IList<ReportDto>>(jobs);

            var reportBytes = _excelService.CreateExcelPackage(jobsDto);

            return File(reportBytes, ReportName.XlsxContentType, ReportName.EverGreen);
        }

        [HttpGet("active")]
        public async Task<IActionResult> Active(ReportQueryDto reportQueryDto)
        {
            var jobQuery = _mapper.Map<ReportQuery>(reportQueryDto);

            var jobs = await _unitOfWork.Jobs.GetJobsForActiveReport(jobQuery);

            var jobsDto = _mapper.Map<IList<ReportDto>>(jobs);

            var reportBytes = _excelService.CreateExcelPackage(jobsDto);

            return File(reportBytes, ReportName.XlsxContentType, ReportName.Active);
        }

        [HttpGet("inActive")]
        public async Task<IActionResult> InActive(ReportQueryDto reportQueryDto)
        {
            var jobQuery = _mapper.Map<ReportQuery>(reportQueryDto);

            var jobs = await _unitOfWork.Jobs.GetJobsForInActiveReport(jobQuery);

            var jobsDto = _mapper.Map<IList<ReportDto>>(jobs);

            var reportBytes = _excelService.CreateExcelPackage(jobsDto);

            return File(reportBytes, ReportName.XlsxContentType, ReportName.InActive);
        }

        [HttpGet("createdBy")]
        public async Task<IActionResult> CreatedBy(ReportQueryDto reportQueryDto)
        {
            var jobQuery = _mapper.Map<ReportQuery>(reportQueryDto);

            var jobs = await _unitOfWork.Jobs.GetJobsForCreatedByReport(jobQuery);

            var jobsDto = _mapper.Map<IList<ReportDto>>(jobs);

            var reportBytes = _excelService.CreateExcelPackage(jobsDto);

            return File(reportBytes, ReportName.XlsxContentType, ReportName.CreatedBy);
        }
    }
}
