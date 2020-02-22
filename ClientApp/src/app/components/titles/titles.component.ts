import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  @Input('title') title:string;
  @Input('subTitle') subTitle:string; 

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentClickOnEmployee.subscribe(
      isClicked => {
        if(isClicked){
          this.title = "SEARCH RESULTS";
          this.subTitle ="";
        }else{
          this.title = "LOOKING FOR AN EMPLOYEE?"
          this.subTitle ="Click on the search bar to learn our suggestions";
        }
      })
  }

}
