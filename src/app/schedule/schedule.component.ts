import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { combineLatest, map } from 'rxjs/operators';

import { TemperaturesService } from '../temperatures.service';
import { ZonesService } from '../zones.service';
import { Schedule } from '../schedule.model';

@Component({
  selector: 'hs-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  schedule$: Observable<Schedule>;

  constructor(
    private temperaturesService: TemperaturesService,
    private zonesService: ZonesService
  ) {}

  ngOnInit() {
    this.schedule$ = this.temperaturesService
      .getTemperatures()
      .pipe(
        combineLatest(this.zonesService.getZones()),
        map(([temperatures, weekZones]) => ({ temperatures, weekZones }))
      );
  }
}
