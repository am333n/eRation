import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
})
export class EditProductsComponent {
  id = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router
  ) {}
  updateform!: FormGroup;
  productDetails!: Products;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let prodid = params['id'];
      console.log(prodid);
      this.id = prodid; // Print the parameter to the console.
    });
    this.productservice.getProduct(this.id).subscribe((data) => {
      this.productDetails = data;
      console.log(this.productDetails);
      this.updateform = new FormGroup({
        name: new FormControl(this.productDetails.name),
        catagoryid: new FormControl(this.productDetails.catagoryid),
        description: new FormControl(this.productDetails.description),
        price: new FormControl(this.productDetails.price),
        vendorName: new FormControl(this.productDetails.vendorName),
        rating: new FormControl(this.productDetails.rating),
      });
    });
  }
  updateProduct(id: any) {
    console.log(this.updateform.value);

    // let updateProduct={
    //   id:form.value.id,
    //   name: form.value.name,
    //   catagoryid:  form.value.catid,
    //   description: form.value.desc,
    //   price: form.value.price,
    //   isAvailable: true,
    //   rating: form.value.rating,
    //   vendorName: form.value.vendorName
    // }
    this.productservice.updateProduct(id, this.updateform.value).subscribe({
      next: (data) => {
        this.router.navigate([`/products/view-product/${this.id}`]);
        // alert("update succesful")
        Swal.fire({
          title: '',
          text: 'Update Successful',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      },
      error: (error) => {
        alert(error);
      },
    });
  }
  clear() {
    this.updateform.reset();
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
