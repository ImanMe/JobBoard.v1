using System;

namespace JobBoard.Core.Models
{
    public class ReportQuery
    {
        public int JobBoardId { get; set; }
        public int Pod { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string User { get; set; }
    }
}
