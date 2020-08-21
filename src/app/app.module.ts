import { environment } from './../environments/environment';
import { AuthClientService } from './services/auth-client.service';
import { ClientService } from './services/client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import {AngularFireModule} from 'angularfire2';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { ClientsComponent } from './components/clients/clients.component'
import { FormsModule} from '@angular/forms'
import { FlashMessagesModule } from 'angular2-flash-messages'

@NgModule({
  declarations: [
    AppComponent,
    DetailsClientComponent,
    EditClientComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    RegisterComponent,
    SettingComponent,
    SidebarComponent,
    DashboardComponent,
    AddClientComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ClientService,
    AuthClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
