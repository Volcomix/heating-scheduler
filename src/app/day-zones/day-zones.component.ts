import { Component, Input } from '@angular/core';

import { Zone } from '../zone.model';

@Component({
  selector: 'hs-day-zones',
  templateUrl: './day-zones.component.html',
  styleUrls: ['./day-zones.component.css'],
})
export class DayZonesComponent {
  @Input() zones: Zone[];
}
