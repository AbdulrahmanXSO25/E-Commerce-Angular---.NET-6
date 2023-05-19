import * as cuid  from 'cuid';

export interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureURL: string;
  brand: string;
  type: string;
}
export interface IBasket {
  id:string;
  items: IBasketItem[];
  clientSecret?: string;
  deliveryMethodId?: number;
  shippingPrice: number;
}

export class IBasket implements IBasket {
  id = cuid();
  items: IBasketItem[] = [];
  shippingPrice = 0;
}

export interface BasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
