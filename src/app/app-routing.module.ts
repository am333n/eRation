import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '',component:HomePageComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
