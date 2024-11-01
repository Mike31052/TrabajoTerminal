import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisrComponent } from './bisr.component';

describe('BisrComponent', () => {
  let component: BisrComponent;
  let fixture: ComponentFixture<BisrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BisrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
