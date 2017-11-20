using System.Collections.Generic;

namespace JobBoard.Core.Models
{
    public class Currency
    {
        public static IList<string> Types { get; }
            = new List<string>(new[] { "USD", "CAD" });
    }
}
