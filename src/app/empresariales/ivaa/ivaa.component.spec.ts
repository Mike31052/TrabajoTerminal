import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaaComponent } from './ivaa.component';

describe('IvaaComponent', () => {
  let component: IvaaComponent;
  let fixture: ComponentFixture<IvaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvaaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
