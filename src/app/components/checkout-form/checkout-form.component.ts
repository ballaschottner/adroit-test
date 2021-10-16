import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
  }

  cardForm: FormGroup = this.fb.group({
    cardNumber: [null, [Validators.required, Validators.minLength(16)]],
    expYear: ['', [Validators.required]],
    expMonth: ['', [Validators.required]],
    cvv: [null, [Validators.required, Validators.minLength(3)]]
  })

  ngOnInit(): void {
  }


  get cardNumber(): AbstractControl | null {
    return this.cardForm.get('cardNumber');
  }

  get cvv(): AbstractControl | null {
    return this.cardForm.get('cvv');
  }

  get expYear(): AbstractControl | null {
    return this.cardForm.get('expYear');
  }

  get expMonth(): AbstractControl | null {
    return this.cardForm.get('expMonth');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.cardForm.valid) {
      this.cardForm.reset();
    }

  }
}
