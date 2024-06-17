import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCardComponent } from './timeline-card.component';

describe('TimelineCardComponent', () => {
  let component: TimelineCardComponent;
  let fixture: ComponentFixture<TimelineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
