import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import * as moment from 'moment';

import localeFr from '@angular/common/locales/fr';

import { InMemoryScheduleService } from './in-memory-schedule.service';
import { TemperaturesService } from './temperatures.service';
import { ZonesService } from './zones.service';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DaysComponent } from './days/days.component';
import { HoursComponent } from './hours/hours.component';
import { DayZonesComponent } from './day-zones/day-zones.component';

moment.locale('fr');
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    DaysComponent,
    HoursComponent,
    DayZonesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryScheduleService),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    TemperaturesService,
    ZonesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
