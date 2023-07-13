import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductByCatagoryComponent } from './view-product-by-catagory/view-product-by-catagory.component';
import { ViewProductByPriceComponent } from './view-product-by-price/view-product-by-price.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: ViewProductsComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'edit-products/:id', component: EditProductsComponent },
  { path: 'dlt-products/:id', component: DeleteProductComponent },
  { path: 'add-product', component: AddProductsComponent },
  { path: 'search-price', component: ViewProductByPriceComponent },
  { path: 'search', component: ViewProductByCatagoryComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
