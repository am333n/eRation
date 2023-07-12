import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent {

  productList :Products [] = []

  constructor(private productservice:ProductsService){
    
  }
  ngOnInit():void{
    //console.log(3);

    this.productservice.GetProducts().subscribe({
      next: (data) =>{
        this.productList=data;
        console.log(this.productList);
        
      },
      error : (error) =>{

      }
      //this.productList=data;
      
    });
  }
}
