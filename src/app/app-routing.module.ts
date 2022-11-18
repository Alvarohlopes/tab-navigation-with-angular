import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard'},
  { path: 'first-page', component: FirstPageComponent, title: 'First Page' },
  { path: 'second-page', component: SecondPageComponent, title: 'Second Page' },
  { path: 'third-page', component: ThirdPageComponent, title: 'Third Page' },
  { path: 'fourth-page', component: FourthPageComponent, title: 'Fourth Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
