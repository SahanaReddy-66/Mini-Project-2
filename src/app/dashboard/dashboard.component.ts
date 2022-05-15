import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  aValue: any;
  bValue: any;
  result: any;
  details:any;
 

  constructor(private router: Router,
    private sharedService: SharedService) { }

  ngOnInit(): void {

  }
  about() {
    this.router.navigate(['/dashboard/about'])
    console.log("sahana")
  }
  services() {
    this.router.navigate(['/dashboard/services'])
  }
  clients() {
    this.router.navigate(['/dashboard/clients'])
  }
  contact() {
    this.router.navigate(['/dashboard/contact'])
  }
  // this.x=this.aValue;

  addtion() {
    this.result = (this.sharedService.addNumbers(this.aValue, this.bValue));
    
  }
  subtraction() {
    this.result = (this.sharedService.subNumbers(this.aValue, this.bValue))
  }
  multiplication() {
    this.result = (this.sharedService.mulNumbers(this.aValue, this.bValue))
  }
  division() {
    this.result = (this.sharedService. divNumbers(this.aValue, this.bValue))
  }

}
