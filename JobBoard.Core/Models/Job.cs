using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace JobBoard.Core.Models
{
    public class Job
    {
        public Job()
        {
            Occupations = new Collection<JobOccupation>();
        }

        public long Id { get; set; }

        public string Title { get; set; }

        public string JobDescription { get; set; }

        public string JobRequirements { get; set; }

        public decimal? Salary { get; set; }

        public string ZipCode { get; set; }

        public string City { get; set; }

        public string Address { get; set; }

        public bool IsEverGreen { get; set; } = false;

        public int SchedulingPod { get; set; }

        public int OfficeId { get; set; }

        public short? MinimumExperience { get; set; }

        public short? MaximumExperience { get; set; }

        public string CompanyName { get; set; }

        public DateTime ActivationDate { get; set; }

        public DateTime ExpirationDate { get; set; }

        public string EmailTo { get; set; }

        public string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now.Date;

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public ICollection<JobOccupation> Occupations { get; set; }

        public string EditedBy { get; set; }

        public DateTime? EditedDate { get; set; }

        public string Division { get; set; }

        public string Currency { get; set; }

        public bool IsBestPerforming { get; set; } = false;

        public string Author { get; set; }

        public JobBoard JobBoard { get; set; }

        public int JobBoardId { get; set; }

        public EmploymentType EmploymentType { get; set; }

        public int EmploymentTypeId { get; set; }

        public int SalaryTypeId { get; set; }

        public SalaryType SalaryType { get; set; }

        public int CountryId { get; set; }

        public Country Country { get; set; }

        public int StateId { get; set; }

        public State State { get; set; }

        public long? CloneFrom { get; set; }

        public long? EverGreenId { get; set; }

        public bool IsSponsored { get; set; } = false;

        public string Tags { get; set; }

        public bool HasStat => Stat != null;

        public Stat Stat { get; set; }

        public void SetEditInfo(JobBoardUser user)
        {
            EditedBy = user.Email;
            EditedDate = DateTime.Now;
        }

        public void Expire()
        {
            if (ExpirationDate > DateTime.Now)
                ExpirationDate = DateTime.Now.AddDays(-1);
        }
    }
}
