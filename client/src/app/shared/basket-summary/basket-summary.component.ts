import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketItem } from '../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent {
  @Output() addItem = new EventEmitter<IBasketItem>();
  @Output() removeItem = new EventEmitter<{id: number, quantity: number}>();
  @Input() isBasket = true;

  constructor(public basketService: BasketService) {}

  addBasketItem(item: IBasketItem) {
    this.addItem.emit(item)
  }

  removeBasketItem(id: number, quantity = 1) {
    this.removeItem.emit({id, quantity})
  }
}
