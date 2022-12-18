import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './welcome/welcome.module';

const routes: Routes = [
  {path:"",loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)},
  {path:"products", loadChildren:() => import('./products/products.module').then(m=> m.ProductsModule)},
  {path:"cart", loadChildren:() => import('./cart/cart.module').then(m=>m.CartModule)},
  {path:"login",loadChildren:() => import('./login/login.module').then(m=>m.LoginModule)},
  {path:"signup",loadChildren:() => import('./signup/signup.module').then(m=>m.SignupModule)},
  {path:"orders",loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule),canActivate:[AuthGuard]},
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  WelcomeModule,
SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
