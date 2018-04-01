import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import * as moment from 'moment';

import localeFr from '@angular/common/locales/fr';

import { InMemoryScheduleService } from './in-memory-schedule.service';
import { DaysService } from './days.service';
import { TemperaturesService } from './temperatures.service';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HoursComponent } from './hours/hours.component';
import { DaysComponent } from './days/days.component';

moment.locale('fr');
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HoursComponent,
    DaysComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryScheduleService),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    DaysService,
    TemperaturesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
