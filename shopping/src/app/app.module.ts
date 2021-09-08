import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddsComponent } from './adds/adds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewzComponent } from './newz/newz.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    SpinnerComponent,
    AddsComponent,
    LoginComponent,
    RegisterComponent,
    NewzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:AuthorizationInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
