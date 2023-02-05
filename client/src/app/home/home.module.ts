import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
