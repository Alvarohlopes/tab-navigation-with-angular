import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdPageComponent } from './third-page.component';

const routes: Routes = [
  { path: '', component: ThirdPageComponent, title: 'Third Page' },
];

@NgModule({
  declarations: [
    ThirdPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ThirdPageModule { }
