import {
  Component,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
} from '@angular/core';
import * as moment from 'moment';

import { Zone } from '../zone.model';

const minutesInDay = 24 * 60;

@Component({
  selector: 'hs-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent {
  @Input() zone: Zone;

  @HostBinding('class.first')
  @Input()
  isFirst: boolean;

  @HostBinding('class.last')
  @Input()
  isLast: boolean;

  private listeners: Array<() => void>;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostBinding('style.background-color')
  get color() {
    return this.zone.temperature.color;
  }

  @HostBinding('style.left.%')
  get left() {
    if (this.isFirst) {
      return 0;
    } else {
      const startOfDay = moment(this.zone.startDate).startOf('day');
      const minutes = -startOfDay.diff(this.zone.startDate, 'minutes');
      return 100 * minutes / minutesInDay;
    }
  }

  @HostBinding('style.right.%')
  get right() {
    if (this.isLast) {
      return 0;
    } else {
      const endOfDay = moment(this.zone.endDate).endOf('day');
      const minutes = endOfDay.diff(this.zone.endDate, 'minutes');
      return 100 * minutes / minutesInDay;
    }
  }

  startResizing() {
    this.listeners = [
      this.renderer.listen('document', 'mousemove', this.resize.bind(this)),
      this.renderer.listen(
        'document',
        'selectstart',
        this.disableSelect.bind(this)
      ),
      this.renderer.listen('document', 'mouseup', this.endResizing.bind(this)),
    ];
    document.body.style.cursor = 'ew-resize';
  }

  resize(event: MouseEvent) {
    const parentElement: HTMLElement = this.elementRef.nativeElement
      .parentElement;
    const { left, width } = parentElement.getBoundingClientRect();
    let minutes = minutesInDay * (event.clientX - left) / width;
    minutes = Math.round(minutes / 15) * 15;
    const startOfDay = moment(this.zone.startDate).startOf('day');
    const endOfDay = moment(this.zone.startDate)
      .endOf('day')
      .subtract(1, 'hour');
    const date = moment(startOfDay).add(minutes, 'minutes');
    if (date.isBefore(startOfDay)) {
      this.zone.startDate = startOfDay.toDate();
    } else if (date.diff(this.zone.endDate, 'hours') > -1) {
      this.zone.startDate = moment(this.zone.endDate)
        .subtract(1, 'hour')
        .toDate();
    } else if (date.isAfter(endOfDay)) {
      this.zone.startDate = endOfDay.toDate();
    } else {
      this.zone.startDate = date.toDate();
    }
  }

  endResizing() {
    this.listeners.forEach(listener => listener());
    document.body.style.cursor = 'auto';
  }

  disableSelect(event: MouseEvent) {
    event.preventDefault();
  }
}
