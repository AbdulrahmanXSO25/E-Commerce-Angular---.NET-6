import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {

  constructor(public bcService:BreadcrumbService, private location:Location) {

  }

  inAuthModule(): boolean {
    return this.location.path().includes('auth');
  }


}
