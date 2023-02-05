import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product?:IProduct;

  constructor(private shopService:ShopService, private activatedRoute:ActivatedRoute,private toastr:ToastrService) {}


  quantity:number = 1;

  quantityIncrement() {
    this.quantity++;
  }

  quantityDecrement() {
    if (this.quantity > 0) this.quantity--;
    else this.toastr.error('The quantity is 0')
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
