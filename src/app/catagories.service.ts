import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catagories } from './catagories';
@Injectable({
  providedIn: 'root'
})
export class CatagoriesService {

  constructor(private httpClient: HttpClient) { }

  getCatagories():Observable<Catagories[]>{
    const url="http://localhost:3000/catagories"
    return this.httpClient.get<Catagories[]>(url)
  }
}
