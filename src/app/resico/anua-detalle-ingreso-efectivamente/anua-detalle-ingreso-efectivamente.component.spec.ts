import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuaDetalleIngresoEfectivamenteComponent } from './anua-detalle-ingreso-efectivamente.component';

describe('AnuaDetalleIngresoEfectivamenteComponent', () => {
  let component: AnuaDetalleIngresoEfectivamenteComponent;
  let fixture: ComponentFixture<AnuaDetalleIngresoEfectivamenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnuaDetalleIngresoEfectivamenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuaDetalleIngresoEfectivamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
