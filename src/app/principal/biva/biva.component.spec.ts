import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BivaComponent } from './biva.component';

describe('BivaComponent', () => {
  let component: BivaComponent;
  let fixture: ComponentFixture<BivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
