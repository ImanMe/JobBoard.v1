using JobBoard.Core.Interfaces;

namespace JobBoard.Core.Models
{
    public class JobQuery : IQueryObject
    {
        public string ListType { get; set; }
        public int? Id { get; set; }
        public bool? IsActive { get; set; }
        public string Title { get; set; }
        public int? SchedulingPod { get; set; }
        public int? OfficeId { get; set; }
        public string JobBoard { get; set; }
        public string Division { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Category { get; set; }
        public string CompanyName { get; set; }
        public string CreatedBy { get; set; }
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
    }
}
