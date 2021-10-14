import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout.component';
import { CheckoutModule } from './components/checkout.module';
import { CardNumberPipe } from './shared/card-number.pipe'

@NgModule({
    declarations: [
        AppComponent,
        CheckoutComponent,
        CardNumberPipe

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CheckoutModule
    ],
    providers: [],
    exports: [
        CardNumberPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
