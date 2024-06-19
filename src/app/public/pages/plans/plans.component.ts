import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  showPaymentCard = false;

  onBuyClick() {
    this.showPaymentCard = true;
  }
  makePayment() {
    setTimeout(() => {
      this.showPaymentCard = false;
    }, 2000);
  }
}
