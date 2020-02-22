import { Employee } from '../models/employee.model';
import { Subject } from 'rxjs';
import { Injectable} from '@angular/core';

@Injectable()
export class EmployeeService{
    employessChanged = new Subject<Employee[]>();

    private employees: Employee[] = [];
    private afterSearch: Employee[] = [];
    private input:string;

    getEmployees(){
        return this.employees.slice();
    }

    getInputMatch(){
        return this.input;
    }

    setEmployess(employees: Employee[]){
        this.employees = employees;
        this.employessChanged.next(this.employees.slice());
    }

    getEmployeeSearch(input:string){
        let employeesMatch =[];
        this.input = input;
        this.employees.forEach(function (employee){
            if(employee.EmployeeName.toLowerCase().includes(input.toLowerCase())){
                employeesMatch.push(employee); 
            }
            else if(employee.WorkTitle.toLowerCase().includes(input.toLowerCase())){
                employeesMatch.push(employee);
            }
        })
        if(employeesMatch.length === 0){
            this.afterSearch = this.employees;
        }
        else{
            this.afterSearch = employeesMatch;
        }
        this.employessChanged.next(this.afterSearch.slice());
    }

    handelClick(afterSearch:Employee[]){
        this.employessChanged.next(afterSearch);
    }

    getEmployeeListAfterSearch(){
        return this.afterSearch;
    }
}
