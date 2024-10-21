import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyoComponent } from './ryo.component';

describe('RyoComponent', () => {
  let component: RyoComponent;
  let fixture: ComponentFixture<RyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
