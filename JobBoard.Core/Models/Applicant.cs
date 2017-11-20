using System;

namespace JobBoard.Core.Models
{
    public class Applicant
    {
        public long Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public long JobId { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string FileName { get; set; }

        public DateTime Date { get; set; } = DateTime.Today;
    }
}
