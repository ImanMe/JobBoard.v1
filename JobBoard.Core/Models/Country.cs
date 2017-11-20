using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace JobBoard.Core.Models
{
    public class Country
    {
        public Country()
        {
            States = new Collection<State>();
        }

        public int Id { get; set; }

        public string CountryName { get; set; }

        public string CountryCode { get; set; }

        public ICollection<State> States { get; set; }
    }
}
