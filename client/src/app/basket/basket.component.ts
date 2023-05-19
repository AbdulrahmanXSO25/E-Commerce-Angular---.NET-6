import { Component, Input } from '@angular/core';
import { IBasketItem } from '../shared/models/basket';
import { IProduct } from '../shared/models/product';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {


  constructor(public basketService:BasketService) {}

  quantityIncrement(item: IBasketItem) {
    this.basketService.addItemToBasket(item);
  }
  removeProduct(event: {id: number, quantity: number}) {
    this.basketService.removeItemFromBasket(event.id,event.quantity);
  }

}
