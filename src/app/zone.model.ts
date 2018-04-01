import { Temperature } from './temperature.model';

export interface Zone {
  startDate: Date;
  endDate?: Date;
  temperatureName: string;
  temperature?: Temperature;
}
