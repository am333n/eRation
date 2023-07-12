import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {
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
  updateProduct(form:any){
    console.log(form.value);
    let updateProduct={
      id:form.value.id,
      name: form.value.name,
      catagoryid:  form.value.catid,
      description: form.value.desc,
      price: form.value.price,
      isAvailable: true,
      rating: form.value.rating,
      vendorName: form.value.vendorName
    }
    this.productservice.updateProduct(this.id,updateProduct).subscribe({
      next: (data) =>{
        this.router.navigate([`/products/view-product/${this.id}`])
        // alert("update succesful")
        Swal.fire({
          title: '',
          text: 'Update Successful',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      },
      error: (error) => {
        alert(error)
      }
    })
    this.clear(){
      this.Form.resetForm();

    }
    
  }
}