import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  {
    path: 'first-page',
    loadChildren: () =>
      import('./first-page/first-page.module').then(
        (m) => m.FirstPageModule
      ),
  },
  { path: 'second-page', component: SecondPageComponent, title: 'Second Page' },
  { path: 'fourth-page', component: FourthPageComponent, title: 'Fourth Page' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
