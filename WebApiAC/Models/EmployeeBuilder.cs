using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoCompleteDeloitte.WebApiAC.Models
{
    public class EmployeeBuilder
    {
        public List<Employee> employeesList { get; set; }

        private void createListOfEmplyees()
        {
            employeesList = new List<Employee>
            {
                new Employee
                {
                    EmployeeName = "Yosi Levi",
                    ImageUrl = "https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_man_male_profile_account-512.png",
                    WorkTitle = "Devloper",
                    ID = "1"
                },
                new Employee
                {
                    EmployeeName = "Nitzan Chone",
                    ImageUrl = "https://en.pimg.jp/021/462/920/1/21462920.jpg",
                    WorkTitle = "Worker",
                    ID = "3"
                },

                new Employee
                {

                    EmployeeName = "Nitzan Maman",
                    ImageUrl = "https://www.colourbox.com/preview/12863023-businesswoman-profile-icon-female-portrait-flat.jpg",
                    WorkTitle = "Worker",
                    ID = "2"
                },
                new Employee
                {
                    EmployeeName = "Gal Gadot",
                    ImageUrl = "https://www.colourbox.com/preview/13632259-businesswoman-profile-icon-female-portrait-flat.jpg",
                    WorkTitle = "Manger",
                    ID = "4"
                },
                new Employee
                {
                    EmployeeName = "David Tzor",
                    ImageUrl = "https://www.w3schools.com/w3images/avatar2.png",
                    WorkTitle = "Designer",
                    ID = "5"
                },
                new Employee
                {
                    EmployeeName = "Noa Chen",
                    ImageUrl = "https://www.w3schools.com/howto/img_avatar2.png",
                    WorkTitle = "Devloper",
                    ID = "6"
                },

                new Employee
                {

                    EmployeeName = "Ron Koby",
                    ImageUrl = "https://www.w3schools.com/howto/img_avatar.png",
                    WorkTitle = "Worker",
                    ID = "7"
                },
                new Employee
                {
                    EmployeeName = "Noa Kilaa",
                    ImageUrl = "https://www.w3schools.com/w3images/avatar6.png",
                    WorkTitle = "Worker",
                    ID = "8"
                }
            };
        }

        public EmployeeBuilder()
        {
            createListOfEmplyees();
        }
    }
}
