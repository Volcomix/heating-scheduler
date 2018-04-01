import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Temperature } from './temperature.model';
import { Zone } from './zone.model';

export class InMemoryScheduleService implements InMemoryDbService {
  createDb() {
    const temperatures: Temperature[] = [
      { name: 'Confort', value: 19, icon: '', color: '#f8b50c' },
      { name: 'Nuit', value: 17, icon: '', color: '#49b1bc' },
      { name: 'Éco', value: 18, icon: '', color: '#44a98e' },
    ];
    const days: Zone[][] = [
      [
        { date: new Date('2018-01-01T07:00:00'), temperatureName: 'Éco' },
        { date: new Date('2018-01-01T19:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-01T22:00:00'), temperatureName: 'Nuit' },
      ],
      [
        { date: new Date('2018-01-02T07:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-02T13:30:00'), temperatureName: 'Éco' },
        { date: new Date('2018-01-02T19:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-02T22:00:00'), temperatureName: 'Nuit' },
      ],
      [
        { date: new Date('2018-01-03T07:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-03T13:30:00'), temperatureName: 'Éco' },
        { date: new Date('2018-01-03T19:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-03T22:00:00'), temperatureName: 'Nuit' },
      ],
      [
        { date: new Date('2018-01-04T07:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-04T13:30:00'), temperatureName: 'Éco' },
        { date: new Date('2018-01-04T19:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-04T22:00:00'), temperatureName: 'Nuit' },
      ],
      [
        { date: new Date('2018-01-05T07:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-05T13:30:00'), temperatureName: 'Éco' },
        { date: new Date('2018-01-05T19:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-05T22:00:00'), temperatureName: 'Nuit' },
      ],
      [
        { date: new Date('2018-01-06T07:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-06T22:00:00'), temperatureName: 'Nuit' },
      ],
      [
        { date: new Date('2018-01-07T07:00:00'), temperatureName: 'Confort' },
        { date: new Date('2018-01-07T22:00:00'), temperatureName: 'Nuit' },
      ],
    ];
    return { temperatures, days };
  }
}
