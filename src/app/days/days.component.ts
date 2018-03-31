import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'hs-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})
export class DaysComponent {
  days: Date[] = [];

  constructor() {
    const day = moment().startOf('week');
    for (let i = 0; i < 7; i++) {
      this.days.push(day.toDate());
      day.add(1, 'day');
    }
  }
}
