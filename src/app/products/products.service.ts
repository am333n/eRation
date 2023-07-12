import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 
  }
  GetProducts():Observable<Products[]>{
    const productUrl='http://localhost:3000/products'
    return this.http.get<Products[]>(productUrl)
  }
  getProduct(id:number):Observable<Products>{
    return this.http.get<Products>('http://localhost:3000/products/'+id)
  }
  createProduct(products:any):Observable<Products>{
    const productUrl='http://localhost:3000/products'
    return this.http.post<Products>(productUrl,products)
  }
  updateProduct(id:number,products:any):Observable<Products>{
    const productUrl='http://localhost:3000/products/'+id
    return this.http.put<Products>(productUrl,products)
  }
}

