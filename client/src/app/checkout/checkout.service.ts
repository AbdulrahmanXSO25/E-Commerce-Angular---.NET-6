import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/env/environment';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getDeliveryMethods() {
    return this.http.get<IDeliveryMethod[]>(this.baseUrl +'orders/deliveryMethods').pipe(
      map(dm => {
        console.log('daaaad');
        return dm.sort((a, b) => b.price - a.price);
      })
    )
  }
}
