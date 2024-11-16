import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualIsrDetComponent } from './mensual-isr-det.component';

describe('MensualIsrDetComponent', () => {
  let component: MensualIsrDetComponent;
  let fixture: ComponentFixture<MensualIsrDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualIsrDetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualIsrDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
