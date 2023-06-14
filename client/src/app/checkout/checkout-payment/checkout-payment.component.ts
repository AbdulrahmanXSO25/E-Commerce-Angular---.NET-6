import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { CheckoutService } from '../checkout.service';
import { firstValueFrom } from 'rxjs';
import { IOrderToCreate } from 'src/app/shared/models/order';
import { IBasket } from 'src/app/shared/models/basket';
import { IAddress } from 'src/app/shared/models/user';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent {

  loading = false;
  @Input() checkoutForm?:FormGroup;
  paymentMethods: any[] = [
    {
      id: 1,
      name: 'Pay Cash',
      description: 'Pay cash when order arriving'
    }
  ]

  constructor(private basketService: BasketService, private checkoutService: CheckoutService,
    private toastr: ToastrService, private router: Router) {}


    async submitOrder() {
      this.loading = true;
      const basket = this.basketService.getCurrentBasketValue();
      if (!basket) throw new Error('cannot get basket');
      try {
        const createdOrder = await this.createOrder(basket);
          this.basketService.deleteBasket(basket);
          const navigationExtras: NavigationExtras = {state: createdOrder};
          this.router.navigate(['checkout/success'], navigationExtras);
      } catch (error: any) {
        console.log(error);
        this.toastr.error(error.message)
      } finally {
        this.loading = false;
      }
    }

    private async createOrder(basket: IBasket | null) {
      if (!basket) throw new Error('Basket is null');
      const orderToCreate = this.getOrderToCreate(basket);
      return firstValueFrom(this.checkoutService.createOrder(orderToCreate));
    }

    private getOrderToCreate(basket: IBasket): IOrderToCreate {
      const deliveryMethodId = this.checkoutForm?.get('deliveryForm')?.get('deliveryMethod')?.value;
      const shipToAddress = this.checkoutForm?.get('addressForm')?.value as IAddress;
      if (!deliveryMethodId || !shipToAddress) throw new Error('Problem with basket');
      console.log(deliveryMethodId);
      return {
        basketId: basket.id,
        deliveryMethodId: deliveryMethodId,
        shipToAddress: shipToAddress
      }
    }

}
