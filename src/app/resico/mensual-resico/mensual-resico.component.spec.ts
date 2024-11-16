import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualResicoComponent } from './mensual-resico.component';

describe('MensualResicoComponent', () => {
  let component: MensualResicoComponent;
  let fixture: ComponentFixture<MensualResicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualResicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensualResicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
