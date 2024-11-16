import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualIngresosComponent } from './anual-ingresos.component';

describe('AnualIngresosComponent', () => {
  let component: AnualIngresosComponent;
  let fixture: ComponentFixture<AnualIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnualIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
