import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsraComponent } from './isra.component';

describe('IsraComponent', () => {
  let component: IsraComponent;
  let fixture: ComponentFixture<IsraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
