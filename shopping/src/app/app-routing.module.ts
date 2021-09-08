import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsComponent } from './adds/adds.component';
import { AuthGuard } from './auth.guard';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { NewzComponent } from './newz/newz.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'display' ,component:DisplayComponent , data:{roles :["admin","user"]},
canActivate:[AuthGuard]},
  {path:'adds' ,component:AddsComponent ,data:{roles : ["admin"]},
  canActivate:[AuthGuard]}, 
  {path:'login' ,component:LoginComponent}, {path:'register' ,component:RegisterComponent}, { path: '', redirectTo: '/newz' , pathMatch: 'full'},
  {path:'newz' ,component:NewzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
