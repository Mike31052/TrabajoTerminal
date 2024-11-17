import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogerDeclaracionComponent } from './escoger-declaracion.component';

describe('EscogerDeclaracionComponent', () => {
  let component: EscogerDeclaracionComponent;
  let fixture: ComponentFixture<EscogerDeclaracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscogerDeclaracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscogerDeclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
