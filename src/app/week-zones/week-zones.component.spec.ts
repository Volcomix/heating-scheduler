import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekZonesComponent } from './week-zones.component';

describe('WeekZonesComponent', () => {
  let component: WeekZonesComponent;
  let fixture: ComponentFixture<WeekZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
