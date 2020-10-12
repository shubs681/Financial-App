import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Company} from './company';
import companyData from './MockShareMarketData.json';
import { OrderBy } from './orderby';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Financial Comparison App';
  companies: Company[] = companyData;
  p: number = 1;
  
  searchCompany(term: string) {
	  if(term && term != ''){
      this.companies = this.companies.filter(x => 
         x.company.trim().toLowerCase().includes(term.trim().toLowerCase())
		 );
    }
	else{
		this.companies = companyData;
  }
  }
  
  searchType(term: string) {
	  if(term && term != ''){
      this.companies = this.companies.filter(x => 
         x.industryType.trim().toLowerCase().includes(term.trim().toLowerCase())
		 );
    }
	else{
		this.companies = companyData;
  }
  
  }


}