import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeypComponent } from './beyp.component';

describe('BeypComponent', () => {
  let component: BeypComponent;
  let fixture: ComponentFixture<BeypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeypComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
