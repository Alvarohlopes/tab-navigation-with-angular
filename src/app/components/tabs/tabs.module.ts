import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs.component';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
