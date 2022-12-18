import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './welcome/welcome.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
