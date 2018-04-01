import { Component, Input } from '@angular/core';

import { Schedule } from '../schedule.model';
import { Temperatures } from '../temperatures.model';
import { Zone } from '../zone.model';

@Component({
  selector: 'hs-week-zones',
  templateUrl: './week-zones.component.html',
  styleUrls: ['./week-zones.component.css'],
})
export class WeekZonesComponent {
  weekZones: Zone[][];

  @Input()
  set schedule(schedule: Schedule) {
    const temperatures: Temperatures = schedule.temperatures.reduce(
      (result: Temperatures, temperature) => {
        result[temperature.name] = temperature;
        return result;
      },
      {}
    );
    schedule.weekZones.forEach((dayZones, dayIdx) => {
      dayZones.forEach((zone, zoneIdx) => {
        if (zoneIdx === dayZones.length - 1) {
          const nextDayZones = schedule.weekZones[(dayIdx + 1) % 7];
          const nextZone = nextDayZones[0];
          zone.endDate = nextZone.startDate;
        } else {
          zone.endDate = dayZones[zoneIdx + 1].startDate;
        }
        zone.temperature = temperatures[zone.temperatureName];
      });
    });
    schedule.weekZones.forEach((dayZones, dayIdx) => {
      const previousDayZones = schedule.weekZones[(dayIdx + 6) % 7];
      const previousZone = previousDayZones[previousDayZones.length - 1];
      dayZones.unshift(previousZone);
    });
    this.weekZones = schedule.weekZones;
  }
}
