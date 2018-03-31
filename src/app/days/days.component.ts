import { Component } from '@angular/core';

@Component({
  selector: 'hs-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})
export class DaysComponent {
  days: Date[] = [];

  constructor() {
    for (let i = 1; i <= 7; i++) {
      this.days.push(new Date(2018, 0, i));
    }
  }
}
