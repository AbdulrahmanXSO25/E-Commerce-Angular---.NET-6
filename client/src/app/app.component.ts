import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'XSO25 E-Commerce';
  products: IProduct[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://localhost:44396/api/products?pageSize=50").subscribe((res: IPagination) =>{
      this.products = res.data;
    },(err) =>{
      console.log(err);
    })
  }
}
