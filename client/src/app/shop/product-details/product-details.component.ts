import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ToastrService } from 'ngx-toastr';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product?:IProduct;
  quantity:number = 1;
  quantityInBasket:number = 0;

  constructor(private shopService:ShopService
    , private activatedRoute:ActivatedRoute
    , private toastr:ToastrService
    ,private bcService:BreadcrumbService
    , private basketService:BasketService) {}


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
      next: product => {
        this.product = product;
      this.bcService.set('@productName',this.product.name);
      this.basketService.basketSource$.pipe(take(1)).subscribe({
        next: basket => {
          const item = basket.items.find(x => x.id === +id);
          if (item) {
            this.quantity = item.quantity;
            this.quantityInBasket = item.quantity;
          }
        }
      })
      },
      error: error => console.log(error)
    })
  }

  updateBasket() {
    if (this.product) {
      if (this.quantity > this.quantityInBasket) {
        const numberOfItemsToAdd = this.quantity - this.quantityInBasket;
        this.quantityInBasket += numberOfItemsToAdd;
        this.basketService.addItemToBasket(this.product, numberOfItemsToAdd);
      }
      else {
        const numberOfItemsToRemove = this.quantityInBasket - this.quantity;
        this.quantityInBasket -= numberOfItemsToRemove;
        this.basketService.removeItemFromBasket(this.product.id, numberOfItemsToRemove);
      }
    }
  }

  get updateCartBtnText() {
    return this.quantityInBasket === 0 ? 'Add to basket' : 'Update basket';
  }

}
