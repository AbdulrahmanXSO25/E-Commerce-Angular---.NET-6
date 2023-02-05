import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product?:IProduct;

  constructor(private shopService:ShopService, private activatedRoute:ActivatedRoute) {}


  quantity:number = 1;
  errorMessage:string = '';

  quantityIncrement() {
    this.quantity++;
    if (this.quantity >= 0) this.errorMessage = '';
  }

  quantityDecrement() {
    if (this.quantity > 0) this.quantity--;
    else this.errorMessage = 'Error!';
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.shopService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    })
  }

}
