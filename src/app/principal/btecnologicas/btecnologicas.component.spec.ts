import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtecnologicasComponent } from './btecnologicas.component';

describe('BtecnologicasComponent', () => {
  let component: BtecnologicasComponent;
  let fixture: ComponentFixture<BtecnologicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtecnologicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtecnologicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
