import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TemperaturesService } from '../temperatures.service';
import { ZonesService } from '../zones.service';
import { Temperatures } from '../temperatures.model';
import { Zone } from '../zone.model';

@Component({
  selector: 'hs-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  temperatures$: Observable<Temperatures>;
  weekZones$: Observable<Zone[][]>;

  constructor(
    private temperaturesService: TemperaturesService,
    private zonesService: ZonesService
  ) {}

  ngOnInit() {
    this.temperatures$ = this.temperaturesService.getTemperatures();
    this.weekZones$ = this.zonesService.getZones();
  }
}
