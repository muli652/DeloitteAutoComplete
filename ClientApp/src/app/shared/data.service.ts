import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private clickedOnEmployeeSource = new BehaviorSubject<boolean>(false);
  currentClickOnEmployee = this.clickedOnEmployeeSource.asObservable();
  private dropDownVisible = new BehaviorSubject<boolean>(false);
  currentDropDownVisible = this.dropDownVisible.asObservable();
  private counterIndex = new BehaviorSubject<any>(0);
  currentCounterIndex = this.counterIndex.asObservable();
  apiURL: string = 'https://localhost:44362/api/employee';

  constructor(private httpClient: HttpClient, private employeeService: EmployeeService) {}

  fetchEmployee(){
    this.httpClient.get<Employee[]>(this.apiURL)
        .subscribe(employees =>{
          this.employeeService.setEmployess(employees);
    })
  }

  changeClickedOnEmployeeValue(isClicked:boolean){
    this.clickedOnEmployeeSource.next(isClicked);
  }

  changeDropDownVisible(isVisible:boolean){
    this.dropDownVisible.next(isVisible);
  }

  changeCounterIndex(indexChange:any){
    this.counterIndex.next(indexChange);
  }
}
