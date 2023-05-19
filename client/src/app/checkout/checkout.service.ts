import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/env/environment';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';
import { IOrderToCreate, IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  createOrder(order: IOrderToCreate) {
    return this.http.post<IOrder>(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http.get<IDeliveryMethod[]>(this.baseUrl +'orders/deliveryMethods').pipe(
      map(dm => {
        return dm.sort((a, b) => b.price - a.price);
      })
    )
  }
}
