using System;

namespace JobBoard.Admin.DTOs
{
    public class ReportQueryDto
    {
        public int JobBoardId { get; set; }
        public int Pod { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string User { get; set; }
        public string ReportType { get; set; }
    }
}
