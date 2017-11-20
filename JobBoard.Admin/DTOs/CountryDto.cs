using System.Collections.Generic;


namespace JobBoard.Admin.DTOs
{
    public class CountryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Code { get; set; }

        public ICollection<StateDto> States { get; set; }
    }
}
