import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  id=0
  constructor(private activatedRoute: ActivatedRoute, private productservice:ProductsService) {
    
  }
  productDetails !:Products
  ngOnInit():void{ 
    this.activatedRoute.params.subscribe(params => {
      let prodid = params['id'];
      console.log(prodid);
      this.id=prodid // Print the parameter to the console. 
  });
    this.productservice.getProduct(this.id).subscribe((data) =>{
      this.productDetails =data;
      console.log(this.productDetails);
  });
  
  }

}
