import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualPagoComponent } from './anual-pago.component';

describe('AnualPagoComponent', () => {
  let component: AnualPagoComponent;
  let fixture: ComponentFixture<AnualPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnualPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
