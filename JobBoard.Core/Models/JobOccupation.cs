namespace JobBoard.Core.Models
{
    public class JobOccupation
    {
        public long JobId { get; set; }

        public Job Job { get; set; }

        public int OccupationId { get; set; }

        public Occupation Occupation { get; set; }
    }
}
