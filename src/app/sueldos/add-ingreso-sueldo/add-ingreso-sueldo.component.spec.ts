import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngresoSueldoComponent } from './add-ingreso-sueldo.component';

describe('AddIngresoSueldoComponent', () => {
  let component: AddIngresoSueldoComponent;
  let fixture: ComponentFixture<AddIngresoSueldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIngresoSueldoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIngresoSueldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
