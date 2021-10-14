import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout.component';
import { CheckoutModule } from './components/checkout.module';



@NgModule({
    declarations: [
        AppComponent,
        CheckoutComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CheckoutModule
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
