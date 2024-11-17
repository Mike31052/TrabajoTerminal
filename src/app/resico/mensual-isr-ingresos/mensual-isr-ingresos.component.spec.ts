import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualISRIngresosComponent } from './mensual-isr-ingresos.component';

describe('MensualISRIngresosComponent', () => {
  let component: MensualISRIngresosComponent;
  let fixture: ComponentFixture<MensualISRIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualISRIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualISRIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
