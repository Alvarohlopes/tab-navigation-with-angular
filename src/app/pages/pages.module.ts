import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SecondPageComponent } from './second-page/second-page.component';



@NgModule({
  declarations: [
    SecondPageComponent,
    FourthPageComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
