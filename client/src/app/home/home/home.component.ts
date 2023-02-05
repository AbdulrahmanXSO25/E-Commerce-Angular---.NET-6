import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private toastr: ToastrService) {}

  toastWelcome() {
    this.toastr.success('Welcome to XSO25!');
  }

}
