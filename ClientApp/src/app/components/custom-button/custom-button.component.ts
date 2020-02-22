import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  searchClicked(){
    this.dataService.changeClickedOnEmployeeValue(true);
  }

}
