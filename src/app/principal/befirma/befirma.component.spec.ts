import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BefirmaComponent } from './befirma.component';

describe('BefirmaComponent', () => {
  let component: BefirmaComponent;
  let fixture: ComponentFixture<BefirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BefirmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BefirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
