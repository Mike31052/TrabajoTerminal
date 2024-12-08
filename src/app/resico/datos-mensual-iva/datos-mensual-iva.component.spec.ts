import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMensualIvaComponent } from './datos-mensual-iva.component';

describe('DatosMensualIvaComponent', () => {
  let component: DatosMensualIvaComponent;
  let fixture: ComponentFixture<DatosMensualIvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosMensualIvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosMensualIvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
