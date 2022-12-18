import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  success:boolean = false;
  products:any[] = [];
  totalPrice:number = 0;
  constructor(private service:CartService){

  }

  ngOnInit(): void {
    this.getCartProducts();
    this.calculateTotalPrice();
  }

  getCartProducts(){
    if("cart" in localStorage){
      this.products = JSON.parse(localStorage.getItem("cart")!);
    }
  }

  clearCart(){
    localStorage.setItem("cart",JSON.stringify([]));
    this.products = [];
    this.calculateTotalPrice();
  }

  deleteProduct(index:number){
    this.products.splice(index,1);
    this.calculateTotalPrice();
    
  }
  calculateTotalPrice(){
    let sum = 0;
    this.products.forEach(product => sum += product.item.variants[0].price);
    this.totalPrice = sum;
  }


  buyOrder(){
    let order = {customer:{id:0}, variants:Array()};
    order.customer.id = 46;
    order.variants = this.products.map(product => {
      let obj = {id:0};
      obj.id = product.item.id > 30 ? 30 : 31;
      return obj;

    });
    this.service.buyOrder(order).subscribe((res:any) =>{
      alert("order bought succesfully.")
      this.success = true;
      this.clearCart();
    },(error:any) =>{
      alert("error happened.")
    })    
  }
}
