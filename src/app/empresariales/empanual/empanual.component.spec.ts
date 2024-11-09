import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanualComponent } from './empanual.component';

describe('EmpanualComponent', () => {
  let component: EmpanualComponent;
  let fixture: ComponentFixture<EmpanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpanualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
