import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 
  }
  GetProducts():Observable{
    return this.http.get('')
  }
  getProduct(id:number):Observable{
    return this.http.get(''+id)
  }
}

