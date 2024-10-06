import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetRegFisComponent } from './det-reg-fis.component';

describe('DetRegFisComponent', () => {
  let component: DetRegFisComponent;
  let fixture: ComponentFixture<DetRegFisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetRegFisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetRegFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
