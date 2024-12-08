import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminacionaComponent } from './determinaciona.component';

describe('DeterminacionaComponent', () => {
  let component: DeterminacionaComponent;
  let fixture: ComponentFixture<DeterminacionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeterminacionaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeterminacionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
