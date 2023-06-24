import { Component } from '@angular/core';
import { CheckoutService } from 'src/service/checkout.service';
import { PrintParticularsInterface } from 'src/types/print-particulars.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productDetails: any;
  basketDetails: any;
  printDetails: PrintParticularsInterface[] = [];
  totalAmount: number = 0;

  constructor(private checkoutService: CheckoutService) {
    this.clear();
    this.displayProducts();
  }

  displayProducts() {
    this.checkoutService.getProducts().subscribe((product) => {
      this.productDetails = Object.entries(product);
    });
  }

  scanItem(productCode: string) {
    this.checkoutService.scanProduct(productCode).subscribe((basket) => {
      this.basketDetails = Object.entries(basket);
    });
  }

  clear() {
    this.checkoutService.clearBasket().subscribe();
    this.basketDetails = [];
    this.printDetails = [];
  }

  print() {
    this.printDetails = [];
    this.totalAmount = 0;
    this.checkoutService.printBasket().subscribe((details) => {
      this.printDetails = details;

      this.printDetails.forEach((element: any) => {
        this.totalAmount += element.price;
      });
    });
  }
}
