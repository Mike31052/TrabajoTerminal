import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrmComponent } from './isrm.component';

describe('IsrmComponent', () => {
  let component: IsrmComponent;
  let fixture: ComponentFixture<IsrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
