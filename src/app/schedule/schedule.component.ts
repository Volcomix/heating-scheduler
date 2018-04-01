import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TemperaturesService } from '../temperatures.service';
import { DaysService } from '../days.service';
import { Temperature } from '../temperature.model';
import { Zone } from '../zone.model';

@Component({
  selector: 'hs-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  temperatures$: Observable<Temperature[]>;
  days$: Observable<Zone[][]>;

  constructor(
    private temperaturesService: TemperaturesService,
    private daysService: DaysService
  ) {}

  ngOnInit() {
    this.temperatures$ = this.temperaturesService.getTemperatures();
    this.days$ = this.daysService.getDays();
  }
}
