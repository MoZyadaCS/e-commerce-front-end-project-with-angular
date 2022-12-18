import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }



  login(data:any){
    return this.http.post("http://localhost:8080/api/v1/customers/login",data);
  }
}
