import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './first-page.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent, title: 'First Page' },
];

@NgModule({
  declarations: [
    FirstPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class FirstPageModule { }
