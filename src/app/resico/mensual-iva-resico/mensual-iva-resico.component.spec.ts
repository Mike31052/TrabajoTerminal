import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualIvaResicoComponent } from './mensual-iva-resico.component';

describe('MensualIvaResicoComponent', () => {
  let component: MensualIvaResicoComponent;
  let fixture: ComponentFixture<MensualIvaResicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualIvaResicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualIvaResicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
