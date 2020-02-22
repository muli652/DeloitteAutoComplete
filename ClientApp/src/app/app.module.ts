import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { TitlesComponent } from './components/titles/titles.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { EmployeeListComponent } from './components/auto-complete/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { DataService } from './shared/data.service';
import { HighlightSearch } from './shared/highlight.pipe';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomButtonComponent,
    TitlesComponent,
    AutoCompleteComponent,
    EmployeeListComponent,
    HighlightSearch,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [EmployeeService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
