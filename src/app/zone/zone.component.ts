import { Component, Input } from '@angular/core';

import { Temperature } from '../temperature.model';

@Component({
  selector: 'hs-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent {
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() temperature: Temperature;
}
