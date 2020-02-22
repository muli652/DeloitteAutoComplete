import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input('isSearchEmpty') isSearchEmpty: boolean = false;
  clickedOnEmplyee:boolean;
  panelDropDownVisible: boolean;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentClickOnEmployee.subscribe(
      isClicked => {
        this.clickedOnEmplyee = isClicked
      })
    this.dataService.currentDropDownVisible.subscribe(
      isOpen => {
        this.panelDropDownVisible = isOpen
      }) 
  }

}
