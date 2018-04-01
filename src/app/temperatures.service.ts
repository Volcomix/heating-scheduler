import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Temperatures } from './temperatures.model';

@Injectable()
export class TemperaturesService {
  private temperaturesUrl = 'api/temperatures';

  constructor(private http: HttpClient) {}

  getTemperatures() {
    return this.http.get<Temperatures>(this.temperaturesUrl);
  }
}
