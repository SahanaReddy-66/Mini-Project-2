import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './dashboard/about/about.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { ContactComponent } from './dashboard/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
   
    MainComponent,
    DashboardComponent,
    AuthenticationComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
