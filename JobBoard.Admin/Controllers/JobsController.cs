using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Admin.Enums;
using JobBoard.Core;
using JobBoard.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace JobBoard.Admin.Controllers
{
    [Route("api/jobs")]
    [AllowAnonymous]
    public class JobsController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public JobsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get(JobQueryDto jobQueryDto)
        {
            var jobQuery = _mapper.Map<JobQuery>(jobQueryDto);

            var queryResult = await _unitOfWork.Jobs.GetJobsAsync(jobQuery);

            _mapper.Map<QueryResultDto<JobDto>>(queryResult);

            return Ok(_mapper.Map<QueryResultDto<JobDto>>(queryResult));
        }

        [HttpGet("{id}", Name = UriName.JobGet)]
        public async Task<IActionResult> Get(long id)
        {
            var job = await _unitOfWork.Jobs.GetJobAsync(id);

            return job != null
                ? Ok(_mapper.Map<JobDto>(job))
                : (IActionResult)NotFound();
        }

        [HttpGet("GetJobsForUpdate/{id}")]
        public async Task<IActionResult> GetJobsForUpdate(long id)
        {
            var job = await _unitOfWork.Jobs.GetJobAsync(id);

            return job != null
                ? Ok(_mapper.Map<JobCreateDto>(job))
                : (IActionResult)NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] JobCreateDto jobCreateDto)
        {
            if (!ModelState.IsValid) return BadRequest();

            var job = _mapper.Map<Job>(jobCreateDto);

            job.CreatedBy = "Bizli";

            await _unitOfWork.Jobs.AddAsync(job);

            await _unitOfWork.CompleteAsync();

            var jobDto = _mapper.Map<JobDto>(job);

            var newUri = Url.Link(UriName.JobGet, new { id = job.Id });

            return Created(newUri, jobDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] JobUpdateDto jobUpdateDto)
        {
            if (!ModelState.IsValid) return BadRequest();

            var job = await _unitOfWork.Jobs.GetJobAsync(id);

            if (job == null) return NotFound();

            _unitOfWork.JobOccupations.Delete(job.Occupations);

            await _unitOfWork.CompleteAsync();

            _mapper.Map(jobUpdateDto, job);

            //job.SetEditInfo("Iman");

            _unitOfWork.Jobs.Edit(job);

            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute]int id)
        {
            var job = await _unitOfWork.Jobs.GetJobAsync(id);

            if (job == null) return NotFound();

            _unitOfWork.Jobs.Delete(job);

            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

        [HttpGet("expire/{id}")]
        public async Task<IActionResult> Expire(long id)
        {
            var job = await _unitOfWork.Jobs.GetJobAsync(id);

            if (job == null) return NotFound();

            if (job.ExpirationDate < DateTime.Now) return BadRequest();

            job.Expire();

            _unitOfWork.Jobs.Edit(job);

            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

        [HttpGet("BatchDeleteByPodId/{podId}")]
        public async Task<IActionResult> BatchDeleteByPodId(int podId)
        {
            var jobs = await _unitOfWork.Jobs.GetJobsByPodId(podId);

            if (!jobs.Any()) return NotFound();

            _unitOfWork.Jobs.MassDelete(jobs);

            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

        [HttpGet("BatchExpireByPodId/{podId}")]
        public async Task<IActionResult> BatchExpireByPodId(int podId)
        {
            var jobs = await _unitOfWork.Jobs.GetJobsByPodId(podId);

            if (!jobs.Any()) return NotFound();

            await _unitOfWork.Jobs.MassExpire(podId);

            await _unitOfWork.CompleteAsync();

            return NoContent();
        }
    }
}
