import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingRegistryComponent } from './wedding-registry.component';

describe('WeddingRegistryComponent', () => {
  let component: WeddingRegistryComponent;
  let fixture: ComponentFixture<WeddingRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingRegistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
