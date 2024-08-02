import { Component } from '@angular/core';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrl: './fees.component.css'
})
export class FeesComponent {
  fees = 20000;
  remaining = 10000;
  paid = this.fees - this.remaining
}
