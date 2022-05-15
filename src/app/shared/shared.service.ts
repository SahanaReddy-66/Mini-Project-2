import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
displayMessage:any;
r_Message:any;
  constructor() { }
  addNumbers(a:any,b:any){
    return a+b;
  }
  subNumbers(a:any,b:any){
    return a-b;
  }
  mulNumbers(a:any,b:any){
    return a*b;
  }
  divNumbers(a:any,b:any){
    return a/b;
  }
 
}
