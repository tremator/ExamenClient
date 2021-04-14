import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {


  public companies: any;
  public isFormVisible: boolean;
  constructor(private service: CompanyService) { 
    this.isFormVisible = false;
    this.companies = [];
  }


  ngOnInit(): void {
    this.service.getCompanies().subscribe((response)=> {
      this.companies = response;
    })
  }

}
