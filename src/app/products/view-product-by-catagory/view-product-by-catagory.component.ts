import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-view-product-by-catagory',
  templateUrl: './view-product-by-catagory.component.html',
  styleUrls: ['./view-product-by-catagory.component.css']
})
export class ViewProductByCatagoryComponent {
  search=""
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
          let prodid = params['catagory'];
          console.log(prodid);
          this.search=prodid // Print the parameter to the console. 
      });
  }
}
