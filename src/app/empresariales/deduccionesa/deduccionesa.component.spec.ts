import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeduccionesaComponent } from './deduccionesa.component';

describe('DeduccionesaComponent', () => {
  let component: DeduccionesaComponent;
  let fixture: ComponentFixture<DeduccionesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeduccionesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeduccionesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
