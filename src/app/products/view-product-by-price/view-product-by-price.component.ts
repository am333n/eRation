import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-view-product-by-price',
  templateUrl: './view-product-by-price.component.html',
  styleUrls: ['./view-product-by-price.component.css'],
})
export class ViewProductByPriceComponent {
  search = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      let prodid = params['price'];
      console.log(prodid);
      this.search = prodid; // Print the parameter to the console.
    });
  }
}
