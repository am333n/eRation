import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  id=0
  constructor(private activatedRoute: ActivatedRoute, private productservice:ProductsService,private router:Router) {
    
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
  
    paused = false;
    pause() {
        this.paused = true;
    }
    resume = () => {
        this.paused = false;
  }
  delete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.actualdelete();
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
  actualdelete() {
    this.productservice.deleteproduct(this.id).subscribe({
      next: (data) => {
        this.router.navigate([`/products`]);
      },
    });
  }
}

