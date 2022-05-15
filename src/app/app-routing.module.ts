import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AuthenticationComponent } from './authentication/authentication.component';



import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  { path:'dashboard',
  loadChildren:()=> import('./dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'authentication', component:AuthenticationComponent},
  {path:'authentication',
loadChildren:()=> import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
