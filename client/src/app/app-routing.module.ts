import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'shop', loadChildren: ()=> import('./shop/shop.module').then(m => m.ShopModule)},
  {path: 'test-error', component:TestErrorComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
