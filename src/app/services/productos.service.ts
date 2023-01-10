import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  //obetener los productos desde la api
  getAllProducts():Observable<any>{
    return this.http.get('https://dummyjson.com/products');
  }

  //obetener los productos por categoria desde la api
  getProductsOfCategory(categoria:string):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/category/${categoria}`);
  };

  //obetener un producto por el id desde la api
  getProduct(id:number):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`);
  };
}
