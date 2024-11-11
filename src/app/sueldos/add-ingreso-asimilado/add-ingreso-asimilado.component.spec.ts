import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngresoAsimiladoComponent } from './add-ingreso-asimilado.component';

describe('AddIngresoAsimiladoComponent', () => {
  let component: AddIngresoAsimiladoComponent;
  let fixture: ComponentFixture<AddIngresoAsimiladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIngresoAsimiladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIngresoAsimiladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
