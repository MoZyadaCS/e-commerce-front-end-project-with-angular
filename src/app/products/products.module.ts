import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './productsList/productsList.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsDetailsComponent
    
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { 


}
