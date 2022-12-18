import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getAllProducts(){
    return this.http.get("http://localhost:8080/api/v1/products");
  }

  getProductsOfCategory(name:string){
    return this.http.get("http://localhost:8080/api/v1/products/" + name)
  }

  getAllCategories(){
    return this.http.get("http://localhost:8080/api/v1/categories")
  }
  getProductById(id:number){
    return this.http.get("http://localhost:8080/api/v1/products/get/" + id);
  }
}
