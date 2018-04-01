import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Temperature } from './temperature.model';

@Injectable()
export class TemperaturesService {
  private temperaturesUrl = 'api/temperatures';

  constructor(private http: HttpClient) {}

  getTemperatures() {
    return this.http.get<Temperature[]>(this.temperaturesUrl);
  }
}
