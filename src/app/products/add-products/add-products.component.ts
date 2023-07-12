import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private productservices:ProductsService,private router:Router){}
  createProductform(form:any){
    console.log(form.value)

    let newProduct={
      name: form.value.name,
      catagoryid:  form.value.catid,
      description: form.value.desc,
      price: form.value.price,
      isAvailable: true,
      rating: form.value.rating,
      vendorName: form.value.vendorName
    }
    this,this.productservices.createProduct(newProduct).subscribe({
      next: (data) =>{
        this.router.navigate([`/products`])
        // alert("update succesful")
        Swal.fire({
          title: '',
          text: 'Product Added successfully',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 2000
        })
      },
      error: (error) => {
        alert(error)
      }
    })
  }
}

