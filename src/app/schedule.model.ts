import { Temperature } from './temperature.model';
import { Zone } from './zone.model';

export interface Schedule {
  temperatures: Temperature[];
  weekZones: Zone[][];
}
