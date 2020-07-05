using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace berichtsheft.Models
{
    public class Report
    {
        public Int32 Id { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public Int32 Year { get; set; }
        public String Department { get; set; }
        public IList<WeekReport> WeekReports { get; set; }
    }
}
