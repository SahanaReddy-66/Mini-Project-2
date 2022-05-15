import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  show:boolean=true;
  recMessage:any;

  @Input() message:any;
  // sharedService: any;
  
  constructor(private router:Router,
    ) { }

  ngOnInit(): void {
    
  }
  login(){
this.router.navigate(['/authentication/login']);
 this.show=false;

  }
  register(){
    this.router.navigate(['/authentication/register']);
     this.show=false;
  }

}
