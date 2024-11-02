import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrfcComponent } from './brfc.component';

describe('BrfcComponent', () => {
  let component: BrfcComponent;
  let fixture: ComponentFixture<BrfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrfcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
