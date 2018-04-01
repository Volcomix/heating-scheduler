import { Component, Input, HostBinding } from '@angular/core';
import * as moment from 'moment';

import { Zone } from '../zone.model';

const minutesInDay = 24 * 60;

@Component({
  selector: 'hs-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent {
  @Input() zone: Zone;

  @HostBinding('class.first')
  @Input()
  isFirst: boolean;

  @HostBinding('class.last')
  @Input()
  isLast: boolean;

  @HostBinding('style.background-color')
  get color() {
    return this.zone.temperature.color;
  }

  @HostBinding('style.left.%')
  get left() {
    if (this.isFirst) {
      return 0;
    } else {
      const startOfDay = moment(this.zone.startDate).startOf('day');
      const minutes = -startOfDay.diff(this.zone.startDate, 'minutes');
      return 100 * minutes / minutesInDay;
    }
  }
  @HostBinding('style.right.%')
  get right() {
    if (this.isLast) {
      return 0;
    } else {
      const endOfDay = moment(this.zone.endDate).endOf('day');
      const minutes = endOfDay.diff(this.zone.endDate, 'minutes');
      return 100 * minutes / minutesInDay;
    }
  }
}
