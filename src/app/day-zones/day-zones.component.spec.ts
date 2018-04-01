import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayZonesComponent } from './day-zones.component';

describe('DayZonesComponent', () => {
  let component: DayZonesComponent;
  let fixture: ComponentFixture<DayZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
