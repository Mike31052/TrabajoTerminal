import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRegComponent } from './info-reg.component';

describe('InfoRegComponent', () => {
  let component: InfoRegComponent;
  let fixture: ComponentFixture<InfoRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
