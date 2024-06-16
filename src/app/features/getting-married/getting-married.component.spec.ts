import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingMarriedComponent } from './getting-married.component';

describe('GettingMarriedComponent', () => {
  let component: GettingMarriedComponent;
  let fixture: ComponentFixture<GettingMarriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettingMarriedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettingMarriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
