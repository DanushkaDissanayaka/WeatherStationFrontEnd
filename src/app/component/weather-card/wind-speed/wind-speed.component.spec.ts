import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSpeedComponent } from './wind-speed.component';

describe('WindSpeedComponent', () => {
  let component: WindSpeedComponent;
  let fixture: ComponentFixture<WindSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
