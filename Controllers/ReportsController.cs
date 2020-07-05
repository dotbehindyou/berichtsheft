using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using berichtsheft.Contexts;
using berichtsheft.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace berichtsheft.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        public readonly ReportContext _reportContext;

        public ReportsController(ReportContext reportContext)
        {
            this._reportContext = reportContext;
        }

        [HttpGet]
        public List<Report> GetReports()
        {
            return this._reportContext.Reports.ToList();
        }

        [HttpPost]
        public Report CreateReport(Report report)
        {
            var r = this._reportContext.Reports.Add(report);
            if (r.State == EntityState.Added)
            {
                this.Response.StatusCode = 201;
                return r.Entity;
            }
            this.Response.StatusCode = 400;
            return null;
        }

        [HttpPut]
        public Report UpdateReport(Report report)
        {
            var r = this._reportContext.Reports.Update(report);
            if (r.State == EntityState.Modified)
            {
                this.Response.StatusCode = 202;
                return r.Entity;
            }
            this.Response.StatusCode = 400;
            return null;
        }

        [HttpDelete]
        public Report DeleteReport(Report report)
        {
            var r = this._reportContext.Reports.Remove(report);
            if (r.State == EntityState.Deleted)
            {
                this.Response.StatusCode = 202;
                return r.Entity;
            }
            this.Response.StatusCode = 400;
            return null;
        }
    }
}
