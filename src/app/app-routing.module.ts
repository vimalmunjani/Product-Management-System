import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductModule } from './product/product.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'products',
    // loadChildren: () => ProductModule
    loadChildren: 'src/app/product/product.module#ProductModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
