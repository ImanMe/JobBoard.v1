using System;

namespace JobBoard.Admin.DTOs
{
    public class ReportDto
    {
        public long Id { get; set; }
        public long? CloneFrom { get; set; }
        public long? EverGreenId { get; set; }
        public string Title { get; set; }
        public string JobBoard { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string CompanyName { get; set; }
        public string Category { get; set; }
        public int? PodId { get; set; }
        public int? OfficeId { get; set; }
        public string Division { get; set; }
        public string ActivationDate { get; set; }
        public string ExpirationDate { get; set; }
        public string CreatedBy { get; set; }
        public string Author { get; set; }
        public string CreatedDate { get; set; }
        public int? ActiveFor { get; set; }
        public int ActiveForThisWk { get; set; }
        public int? Bob { get; set; }
        public int? Intvs { get; set; }
        public int? Intvs2 { get; set; }
        public int? ApsCl { get; set; }
        public string IsEverGreen { get; set; }
        public string IsBestPerforming { get; set; }
        public string EmailApply { get; set; }
        public string OnlineUrl { get; set; }
        public int GetNumberOfActiveDaysInThisWeek()
        {
            if (DateTime.Parse(ExpirationDate) < DateTime.Now)
                return 0;

            var monday = DateTime.Today.AddDays(-(int)DateTime.Today.DayOfWeek + (int)DayOfWeek.Monday);
            monday = monday > DateTime.Today ? monday.AddDays(-7) : monday;
            var startingDate = monday < DateTime.Parse(ActivationDate) ? DateTime.Parse(ActivationDate) : monday;

            var todayMinusMonday = (DateTime.Today - startingDate).Days + 1;

            return todayMinusMonday;
        }
    }
}
