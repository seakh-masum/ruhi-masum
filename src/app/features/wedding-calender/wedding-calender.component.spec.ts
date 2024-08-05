import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCalenderComponent } from './wedding-calender.component';

describe('WeddingCalenderComponent', () => {
  let component: WeddingCalenderComponent;
  let fixture: ComponentFixture<WeddingCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
