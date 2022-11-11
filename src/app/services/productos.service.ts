import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get('https://dummyjson.com/products');
  }

  getProductsOfCategory(categoria:string):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/category/${categoria}`);
  };

  getProduct(id:number):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`);
  };
}
