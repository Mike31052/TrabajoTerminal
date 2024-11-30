import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualDetallePagosMensualesComponent } from './anual-detalle-pagos-mensuales.component';

describe('AnualDetallePagosMensualesComponent', () => {
  let component: AnualDetallePagosMensualesComponent;
  let fixture: ComponentFixture<AnualDetallePagosMensualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnualDetallePagosMensualesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualDetallePagosMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
