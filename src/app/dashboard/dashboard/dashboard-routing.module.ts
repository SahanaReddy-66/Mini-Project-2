import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ClientsComponent } from '../clients/clients.component';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'clients', component:ClientsComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
