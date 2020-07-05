using berichtsheft.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace berichtsheft.Contexts
{
    public class ReportContext : DbContext
    {
        public DbSet<Report> Reports { get; set; }
        public DbSet<WeekReport> WeekReports { get; set; }
        public ReportContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }
    }
}
