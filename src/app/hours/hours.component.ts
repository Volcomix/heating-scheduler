import { Component } from '@angular/core';

@Component({
  selector: 'hs-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css'],
})
export class HoursComponent {
  hours: number[] = [];

  constructor() {
    for (let i = 0; i <= 24; i++) {
      this.hours.push(i);
    }
  }
}
