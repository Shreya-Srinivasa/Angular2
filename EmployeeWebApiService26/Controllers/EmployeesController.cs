using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService26.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<EmployeesAngular26> Get()
        {
            using (EmployeeDBEntities entities = new EmployeeDBEntities())
            {
                return entities.EmployeesAngular26.ToList();
            }
        }
        public EmployeesAngular26 Get(string code)
        {
            using (EmployeeDBEntities entities = new EmployeeDBEntities())
            {
                return entities.EmployeesAngular26.FirstOrDefault(e => e.code == code);
            }
        }
    }
}