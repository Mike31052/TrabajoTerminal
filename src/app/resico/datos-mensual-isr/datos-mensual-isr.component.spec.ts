import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMensualIsrComponent } from './datos-mensual-isr.component';

describe('DatosMensualIsrComponent', () => {
  let component: DatosMensualIsrComponent;
  let fixture: ComponentFixture<DatosMensualIsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosMensualIsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosMensualIsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
