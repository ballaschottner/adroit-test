import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from "./products.interface";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  static API_URL = "http://localhost:3000";
  static PATH = "/products";

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(CheckoutService.API_URL + CheckoutService.PATH);
  }


}
