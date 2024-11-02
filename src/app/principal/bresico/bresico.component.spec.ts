import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BresicoComponent } from './bresico.component';

describe('BresicoComponent', () => {
  let component: BresicoComponent;
  let fixture: ComponentFixture<BresicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BresicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BresicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
