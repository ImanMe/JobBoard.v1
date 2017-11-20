using AutoMapper;
using JobBoard.Admin.DTOs;
using JobBoard.Admin.Enums;
using JobBoard.Core;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobBoard.Admin.Controllers
{
    [Route("api/jobboards")]
    public class JobBoardsController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public JobBoardsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var jobBoards = await _unitOfWork.JobBoards.GetJobBoards();

            return Ok(_mapper.Map<IEnumerable<JobBoardDto>>(jobBoards));
        }

        [HttpGet("{id}", Name = UriName.JobBoardGet)]
        public async Task<IActionResult> Get(int id)
        {
            var jobBoard = await _unitOfWork.JobBoards.GetJobBoardAsync(id);

            return jobBoard != null
                ? (IActionResult)Ok(_mapper.Map<JobBoardDto>(jobBoard))
                : NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]JobBoardCreateDto jobBoardCreateDto)
        {
            if (!ModelState.IsValid) return BadRequest();

            var jobBoard = _mapper.Map<Core.Models.JobBoard>(jobBoardCreateDto);

            await _unitOfWork.JobBoards.AddAsync(jobBoard);

            await _unitOfWork.CompleteAsync();

            var newUri = Url.Link(UriName.JobBoardGet, new { id = jobBoard.Id });

            var jobBoardDto = _mapper.Map<JobBoardDto>(jobBoard);

            return Created(newUri, jobBoardDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute]int id, [FromBody]JobBoardUpdateDto jobBoardUpdateDto)
        {
            var jobBoard = _unitOfWork.JobBoards.GetJobBoardAsync(id);

            if (jobBoard == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest();

            var jobBoardUpdated = _mapper
                .Map<Core.Models.JobBoard>(jobBoardUpdateDto);

            _unitOfWork.JobBoards.Edit(jobBoardUpdated);

            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute]int id)
        {
            var jobBoard = await _unitOfWork.JobBoards.GetJobBoardAsync(id);

            if (jobBoard == null) return NotFound();

            _unitOfWork.JobBoards.Delete(jobBoard);

            await _unitOfWork.CompleteAsync();

            return NoContent();
        }
    }
}
