import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SectionHeaderComponent } from './section-header/section-header.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    SectionHeaderComponent
  ]
})
export class CoreModule { }
