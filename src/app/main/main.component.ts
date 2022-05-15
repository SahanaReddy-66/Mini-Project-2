import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  display:boolean=true;
  
  // @Input() message:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  nav_Authen(){
this.router.navigate(['./authentication'])
this.display=false;

  }
  nav_dashBoard(){
    this.router.navigate(['./dashboard'])
    this.display=false;
  }

}
