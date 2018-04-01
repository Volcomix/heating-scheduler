import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Zone } from './zone.model';

@Injectable()
export class ZonesService {
  private zonesUrl = 'api/zones';

  constructor(private http: HttpClient) {}

  getZones() {
    return this.http.get<Zone[][]>(this.zonesUrl);
  }
}
