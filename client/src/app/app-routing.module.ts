import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'shop', loadChildren: ()=> import('./shop/shop.module').then(m => m.ShopModule)},
  {path: 'basket', loadChildren: ()=> import('./basket/basket.module').then(m => m.BasketModule)},
  {path: 'checkout', loadChildren: ()=> import('./checkout/checkout.module').then(m => m.CheckoutModule)},
  {path: 'test-error', component:TestErrorComponent},
  {path: 'server-error', component:ServerErrorComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
