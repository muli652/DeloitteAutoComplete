import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Subscription } from 'rxjs';
import { DataService } from '../../../shared/data.service';


@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls:['./employee-list.component.css'],
  })
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: Employee[];
  afterSearch: Employee[];
  clickedOnEmplyee:boolean;
  selectedEmployeeName:string;
  counterIndex:any;

  @Input('searchTerm') searchTerm:string;
  @Output() selectedEmployeeNameEvent = new EventEmitter<string>();

  private employeeChangeSub: Subscription;

  constructor(private employeeService:EmployeeService, private dataService:DataService){}

  ngOnInit(){
      this.employees = this.employeeService.getEmployees();
      this.afterSearch = this.employeeService.getEmployeeListAfterSearch();
      this.employeeChangeSub = this.employeeService.employessChanged.subscribe(
        (employees:Employee[]) => {
          this.afterSearch = employees;
        }
      )
      this.dataService.currentClickOnEmployee.subscribe(
        isClicked => this.clickedOnEmplyee = isClicked)
      this.dataService.currentCounterIndex.subscribe(
        index => this.counterIndex = index)
  }

  ngOnDestroy(): void{
    this.employeeChangeSub.unsubscribe();
  }

  onEmplyeeClick(id:string){
    if(!this.clickedOnEmplyee)
    {
      let employeeClicked = [];
      let selectedEmployeeName = "";
      let isClicked = false;
      //no input entered
      if(this.employees.length === 0){
        this.afterSearch.forEach(function(employee){
          if(employee.ID === id){
            employeeClicked.push(employee);
            selectedEmployeeName = employee.EmployeeName;
            isClicked = true;
          }
        })
      }
      else{
        this.employees.forEach(function(employee){
          if(employee.ID === id){
            selectedEmployeeName = employee.EmployeeName;
            employeeClicked.push(employee);
            isClicked = true;
          }
        })
      }
      this.selectedEmployeeName = selectedEmployeeName;
      this.selectedEmployeeNameEvent.emit(this.selectedEmployeeName);
      this.afterSearch = employeeClicked;
      this.employeeService.handelClick(this.afterSearch);
      this.clickedOnEmplyee = isClicked;
      this.dataService.changeClickedOnEmployeeValue(this.clickedOnEmplyee);
    }
  }

  changeColor(index){
    if(this.counterIndex>=0){
      if(this.counterIndex == index){
        return "#f2f2f2";
      }
      else{
        return "#d9d9d9";
      }
    }
  }
} 
