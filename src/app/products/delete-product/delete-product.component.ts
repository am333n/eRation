import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent {
  id = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      let prodid = params['id'];
      console.log(prodid);
      this.id = prodid; // Print the parameter to the console.
    });
  }
}
