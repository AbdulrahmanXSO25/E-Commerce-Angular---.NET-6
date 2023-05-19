import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent {
  @Input() appStepper?: CdkStepper;

  constructor() {}

}
