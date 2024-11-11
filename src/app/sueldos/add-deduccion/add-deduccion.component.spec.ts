import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeduccionComponent } from './add-deduccion.component';

describe('AddDeduccionComponent', () => {
  let component: AddDeduccionComponent;
  let fixture: ComponentFixture<AddDeduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeduccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
