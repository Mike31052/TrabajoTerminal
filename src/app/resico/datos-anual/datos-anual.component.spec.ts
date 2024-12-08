import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAnualComponent } from './datos-anual.component';

describe('DatosAnualComponent', () => {
  let component: DatosAnualComponent;
  let fixture: ComponentFixture<DatosAnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosAnualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
