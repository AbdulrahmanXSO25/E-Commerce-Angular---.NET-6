import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { TestErrorComponent } from './test-error/test-error.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SectionHeaderComponent,
    TestErrorComponent
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
