import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualIvaDetComponent } from './mensual-iva-det.component';

describe('MensualIvaDetComponent', () => {
  let component: MensualIvaDetComponent;
  let fixture: ComponentFixture<MensualIvaDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualIvaDetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualIvaDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
