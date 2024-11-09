import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmensualComponent } from './empmensual.component';

describe('EmpmensualComponent', () => {
  let component: EmpmensualComponent;
  let fixture: ComponentFixture<EmpmensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpmensualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpmensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
