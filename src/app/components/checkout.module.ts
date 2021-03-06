import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductItemComponent} from './products/product-item/product-item.component';
import {CheckoutFormComponent} from './checkout-form/checkout-form.component';
import {FormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductItemComponent,
    CheckoutFormComponent,


  ],
  exports: [
    ProductsListComponent,
    ProductItemComponent,
    CheckoutFormComponent,

  ],
  imports: [CommonModule, HttpClientModule, FormsModule,  NgxMaskModule.forRoot()],
})
export class CheckoutModule {
}
