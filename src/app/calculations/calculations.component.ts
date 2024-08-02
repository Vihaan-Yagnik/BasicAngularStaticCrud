import { Component } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrl: './calculations.component.css'
})
export class CalculationsComponent {
  date = new Date()
  c = 0
  count(){
    if(this.c != 5) this.c = 1 + this.c
    else this.c = 0
  } 
}
