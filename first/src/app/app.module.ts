import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from 'src/sample/sample.component';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { HoverDirective } from './hover.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsComponent } from './forms/forms.component';
import { ChildComponent } from './child/child.component';
import { ReactComponent } from './react/react.component';
import { PipComponent } from './pip/pip.component';
import { MartPipe } from './mart.pipe';
import { CustomerComponent } from './customer/customer.component';
import { ContentComponent } from './content/content.component';
import { HtComponent } from './ht/ht.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { NewzComponent } from './newz/newz.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { NewsService } from './news.service';

let routes:Routes = [{path:'sample',component:SampleComponent}
,
{path:'second',component:SecondComponent}, {path:'third',component:ThirdComponent} ,
{path:'lifecycle',component:LifecycleComponent}, {path:'forms',component:FormsComponent},
{path:'child',component:ChildComponent},{path:'react',component:ReactComponent} ,{path:'pip',component:PipComponent},
{path:'customer',component:CustomerComponent}, {path:'content',component:ContentComponent},{path:'ht',component:HtComponent},{path:'food',component:FoodComponent},{path:'home',component:HomeComponent},
{path:'newz',component:NewzComponent}]
@NgModule({
  declarations: [
    AppComponent ,
    SampleComponent,
    SecondComponent,
    ThirdComponent,
    HoverDirective,
    LifecycleComponent,
    FormsComponent,
    ChildComponent,
    ReactComponent,
    PipComponent,
    MartPipe,
    CustomerComponent,
    ContentComponent,
    HtComponent,
    FoodComponent,
    HomeComponent,
    NewzComponent,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
   
    

  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(routes) ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
