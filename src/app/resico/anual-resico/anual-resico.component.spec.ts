import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualResicoComponent } from './anual-resico.component';

describe('AnualResicoComponent', () => {
  let component: AnualResicoComponent;
  let fixture: ComponentFixture<AnualResicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnualResicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualResicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
