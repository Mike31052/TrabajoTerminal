import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualIsrPagoComponent } from './mensual-isr-pago.component';

describe('MensualIsrPagoComponent', () => {
  let component: MensualIsrPagoComponent;
  let fixture: ComponentFixture<MensualIsrPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualIsrPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualIsrPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
