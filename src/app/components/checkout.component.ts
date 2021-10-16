import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isPaid?: boolean;

  constructor() {
  }

  ngOnInit(): void {

  }

  getData($event: boolean) {
    this.isPaid = $event;
  }
}
