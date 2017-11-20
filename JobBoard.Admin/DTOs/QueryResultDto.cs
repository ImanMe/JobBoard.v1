using System.Collections.Generic;

namespace JobBoard.Admin.DTOs
{
    public class QueryResultDto<T>
    {
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}
