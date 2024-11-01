import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpremiosComponent } from './bpremios.component';

describe('BpremiosComponent', () => {
  let component: BpremiosComponent;
  let fixture: ComponentFixture<BpremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpremiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
