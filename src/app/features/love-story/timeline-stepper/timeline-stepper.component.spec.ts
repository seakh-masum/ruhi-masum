import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStepperComponent } from './timeline-stepper.component';

describe('TimelineStepperComponent', () => {
  let component: TimelineStepperComponent;
  let fixture: ComponentFixture<TimelineStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
