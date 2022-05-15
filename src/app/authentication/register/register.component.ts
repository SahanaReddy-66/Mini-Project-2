import { Component, OnInit,  } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
 
array:any=[];
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
   
  }
  submitForm(form:any){
    console.log(form);
    this.array.push(form.value);
    console.log(this.array)

  }
// this.sharedService.sendMessage(Array)
 
}
