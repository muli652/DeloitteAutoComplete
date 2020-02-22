import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { DataService } from '../../shared/data.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  panelDropDownVisible: boolean = false;
  searchTerm: string = "";
  flagEnterd:boolean = false;
  flagTypedSearch:boolean = false;
  inputValue:string = "";
  counterIndex:any = 0;

  @Output() SearchEmptyEvent = new EventEmitter<boolean>();
  @ViewChild('autoCompleteRef') autoComploteElement: ElementRef;

  constructor(private dataService:DataService, private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  hidePanel() {
    this.panelDropDownVisible = false;
  }

  showPanel() {
    if(!this.panelDropDownVisible) {
      this.panelDropDownVisible = true;
    }
  }

  onInput(event: any){
    this.searchTerm = event.target.value;
    
    if(this.searchTerm.length === 1){
      this.hidePanel();
    }
    else{ 
      this.employeeService.getEmployeeSearch(this.searchTerm);
      this.showPanel();
    }
  }

  onFocus(){
    this.dataService.fetchEmployee();
    this.inputValue = this.searchTerm;
    this.counterIndex = 0;
    this.dataService.changeCounterIndex(this.counterIndex);
    this.flagTypedSearch = false;
    this.showPanel();
    this.dataService.changeDropDownVisible(true);
    this.dataService.changeClickedOnEmployeeValue(false);
  }

  onBlur(){
    this.hidePanel();
  }

  getHeightValue(index){
    const container = this.autoComploteElement.nativeElement;
    const ul = container.querySelector('ul');
    const liHeight = ul.querySelector('li').offsetHeight;
    const scrollTop = ul.scrollTop;
    const scrollOffset = liHeight * index;  
    const viewSize = scrollTop + ul.offsetHeight;
     
    if (scrollOffset < scrollTop || (scrollOffset + liHeight) > viewSize) {
      ul.scrollTop = scrollOffset;
    }
  }

  onAnyKeyPress(event){
    let keyCode = event.keyCode;
    
    //enter pressed
    if(this.flagEnterd){
      this.dataService.changeClickedOnEmployeeValue(false);
      this.flagEnterd = false;
    }

    if (keyCode === 13) {
      if (this.employeeService.getEmployeeListAfterSearch().length != 0 && this.flagTypedSearch){
        this.inputValue = this.employeeService.getEmployeeListAfterSearch()[this.counterIndex].EmployeeName;
      }
      else{
        this.inputValue = this.employeeService.getEmployees()[this.counterIndex].EmployeeName;
      }
      this.employeeService.getEmployeeSearch(this.inputValue);
      
      this.dataService.changeClickedOnEmployeeValue(true);
      this.flagEnterd = true;
      this.hidePanel();
    }
    //down arrow pressed
    else if(keyCode === 40){
      if(this.employeeService.getEmployeeListAfterSearch().length != 0 && this.flagTypedSearch){
        if(this.counterIndex >= this.employeeService.getEmployeeListAfterSearch().length -1)
        {
          this.counterIndex = 0;
        }
        else{
          this.counterIndex += 1;
        }
      }
      else{
        if(this.counterIndex >= this.employeeService.getEmployees().length - 1 )
        {
          this.counterIndex = 0;
        }
        else{
          this.counterIndex += 1;
        }
      }
      this.getHeightValue(this.counterIndex)
      this.dataService.changeCounterIndex(this.counterIndex);
    }
    //up arrow pressed
    else if(keyCode === 38){
      if(this.employeeService.getEmployeeListAfterSearch().length != 0){
        if(this.counterIndex <= 0)
        {
          this.counterIndex = this.employeeService.getEmployeeListAfterSearch().length -1;
        }
        else{
          this.counterIndex -= 1;
        }
      }
      else{
        if(this.counterIndex <= 0 )
        {
          this.counterIndex = this.employeeService.getEmployees().length -1;
        }
        else{
          this.counterIndex -= 1;
        }
      }  
    }
    //any other key
    else{
      this.flagTypedSearch = true;
      this.counterIndex = 0;
    }
    this.getHeightValue(this.counterIndex)
    this.dataService.changeCounterIndex(this.counterIndex);
  }

  reciveEmployeeNameForInput($event){
    this.inputValue = $event;
  }
}
