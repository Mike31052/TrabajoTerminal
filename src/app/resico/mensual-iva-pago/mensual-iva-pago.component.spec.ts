import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualIvaPagoComponent } from './mensual-iva-pago.component';

describe('MensualIvaPagoComponent', () => {
  let component: MensualIvaPagoComponent;
  let fixture: ComponentFixture<MensualIvaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualIvaPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualIvaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
