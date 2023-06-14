import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/env/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {

  baseApiUrl = environment.apiUrl;

  constructor(private http:HttpClient) {}

  get404Error() {
    this.http.get(this.baseApiUrl + 'products/88').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get500Error() {
    this.http.get(this.baseApiUrl + 'buggy/servererror').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400Error() {
    this.http.get(this.baseApiUrl + 'buggy/badrequest').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }


  get400ValidationError() {
    this.http.get(this.baseApiUrl + 'products/eightyeight').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

}
