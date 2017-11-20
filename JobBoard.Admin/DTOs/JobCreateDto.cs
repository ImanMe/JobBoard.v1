namespace JobBoard.Admin.DTOs
{
    public class JobCreateDto
    {
        public string Title { get; set; }

        public string JobDescription { get; set; }

        public string JobRequirements { get; set; }

        public decimal? Salary { get; set; }

        public string ZipCode { get; set; }

        public string City { get; set; }

        public string Address { get; set; }

        public bool IsEverGreen { get; set; }

        public int SchedulingPod { get; set; }

        public int OfficeId { get; set; }

        public short? MinimumExperience { get; set; }

        public short? MaximumExperience { get; set; }

        public string CompanyName { get; set; }

        public string ActivationDate { get; set; }

        public string ExpirationDate { get; set; }

        public string EmailTo { get; set; }

        public int CategoryId { get; set; }

        public int[] SelectedOccupation { get; set; }

        public string Division { get; set; }

        public string Currency { get; set; }

        public bool IsBestPerforming { get; set; }

        public string Author { get; set; }

        public int JobBoardId { get; set; }

        public int EmploymentTypeId { get; set; }

        public int SalaryTypeId { get; set; }

        public int CountryId { get; set; }

        public int StateId { get; set; }

        public long? CloneFrom { get; set; }

        public long? EverGreenId { get; set; }

        public bool IsSponsored { get; set; }

        public string Tags { get; set; }

        public StatDto Stat { get; set; }
    }
}