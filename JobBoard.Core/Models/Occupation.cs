using System.Collections.Generic;

namespace JobBoard.Core.Models
{
    public class Occupation
    {
        public int Id { get; set; }

        public string OccupationName { get; set; }

        public string OccupationCategory { get; set; }

        public string FullOccupationName => OccupationCategory + " - " + OccupationName;

        public ICollection<JobOccupation> JobOccupations { get; set; }
    }
}
