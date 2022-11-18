import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
  // using Lazy Load
  {
    path: 'third-page',
    loadChildren: () =>
      import('./pages/third-page/third-page.module').then(
        (m) => m.ThirdPageModule
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.PagesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
