import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminacionmComponent } from './determinacionm.component';

describe('DeterminacionmComponent', () => {
  let component: DeterminacionmComponent;
  let fixture: ComponentFixture<DeterminacionmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeterminacionmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeterminacionmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
