import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveConnectionComponent } from './love-connection.component';

describe('LoveConnectionComponent', () => {
  let component: LoveConnectionComponent;
  let fixture: ComponentFixture<LoveConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
