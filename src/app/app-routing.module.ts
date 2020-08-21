import { GuardAuthGuard } from './guards/guard-auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingComponent } from './components/setting/setting.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"" , component:DashboardComponent },
  {path:"register" , component: RegisterComponent},
  {path:"login" , component: LoginComponent},
  {path: "client/add" , component:AddClientComponent,canActivate:[GuardAuthGuard]},
  {path:"client/edit/:id" , component:EditClientComponent,canActivate:[GuardAuthGuard]},
  {path: "client/:id", component: DetailsClientComponent,canActivate:[GuardAuthGuard]},
  {path: "setting", component:SettingComponent,canActivate:[GuardAuthGuard] },
  {path:"**" , component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
