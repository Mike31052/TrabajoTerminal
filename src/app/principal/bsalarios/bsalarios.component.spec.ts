import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsalariosComponent } from './bsalarios.component';

describe('BsalariosComponent', () => {
  let component: BsalariosComponent;
  let fixture: ComponentFixture<BsalariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsalariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
