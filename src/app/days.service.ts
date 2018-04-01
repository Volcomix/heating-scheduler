import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Zone } from './zone.model';

@Injectable()
export class DaysService {
  private daysUrl = 'api/days';

  constructor(private http: HttpClient) {}

  getDays() {
    return this.http.get<Zone[][]>(this.daysUrl);
  }
}
