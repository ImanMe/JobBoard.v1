namespace JobBoard.Core.Models
{
    public class State
    {
        public int Id { get; set; }

        public string StateName { get; set; }

        public string StateCode { get; set; }

        public Country Country { get; set; }

        public int CountryId { get; set; }
    }
}
