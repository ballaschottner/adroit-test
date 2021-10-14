import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/services/products.interface';
import { CheckoutService } from 'src/app/services/checkout.services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Products[];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getProducts()
      .subscribe((products) => {
        this.products = products;
      })
  }

}
