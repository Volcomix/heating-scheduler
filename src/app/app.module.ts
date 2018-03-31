import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import * as moment from 'moment';

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
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
