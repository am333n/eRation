import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductByCatagoryComponent } from './view-product-by-catagory/view-product-by-catagory.component';
import { ViewProductByPriceComponent } from './view-product-by-price/view-product-by-price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../site-layout/sidebar/sidebar.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    ViewProductsComponent,
    ViewProductComponent,
    EditProductsComponent,
    DeleteProductComponent,
    ViewProductByCatagoryComponent,
    ViewProductByPriceComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SiteLayoutModule
  ],
  exports:[
    ProductsComponent,
    AddProductsComponent, 
    ViewProductsComponent,
    ViewProductComponent,
    EditProductsComponent,
    DeleteProductComponent,
    FormsModule
  ]
})
export class ProductsModule { }
