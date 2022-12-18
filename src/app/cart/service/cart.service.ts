import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }




  buyOrder(order:any){
   return this.http.post("http://localhost:8080/api/v1/orders",order);

  }
}
