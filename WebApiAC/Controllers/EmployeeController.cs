using AutoCompleteDeloitte.WebApiAC.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoCompleteDeloitte.WebApiAC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // GET api/employee
        [HttpGet]
        public ActionResult GetClients()
        {
            try
            {
                EmployeeBuilder employeeBuilder = new EmployeeBuilder();
                var json = JsonConvert.SerializeObject(employeeBuilder.employeesList);
                return new ContentResult
                {
                    Content = json,
                    ContentType = "application/json"
                };
            }
            catch
            {
                return BadRequest("404 File Not Found");
            }

        }


        [HttpGet("{id}")]
        public Employee Get(string id)
        {
            EmployeeBuilder employeeBuilder = new EmployeeBuilder();
            foreach (Employee employee in employeeBuilder.employeesList)
            {
                if (employee.ID == id)
                {
                    return employee;
                }
            }

            return null;
        }
    }
}
