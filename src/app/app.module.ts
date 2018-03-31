import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HoursComponent } from './hours/hours.component';
import { DaysComponent } from './days/days.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HoursComponent,
    DaysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
