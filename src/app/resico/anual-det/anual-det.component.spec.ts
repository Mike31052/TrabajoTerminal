import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualDetComponent } from './anual-det.component';

describe('AnualDetComponent', () => {
  let component: AnualDetComponent;
  let fixture: ComponentFixture<AnualDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnualDetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
