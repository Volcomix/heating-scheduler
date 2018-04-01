import { Component, Input } from '@angular/core';

import { Temperatures } from '../temperatures.model';
import { Zone } from '../zone.model';

@Component({
  selector: 'hs-day-zones',
  templateUrl: './day-zones.component.html',
  styleUrls: ['./day-zones.component.css'],
})
export class DayZonesComponent {
  @Input() temperatures: Temperatures;
  @Input() zones: Zone[];
}
