using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace berichtsheft.Models
{
    public class WeekReport
    {
        public Int32 Id { get; set; }
        public Int32 Week { get; set; }
        public String Content { get; set; }
    }
}
