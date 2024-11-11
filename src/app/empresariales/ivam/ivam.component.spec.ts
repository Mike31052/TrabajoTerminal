import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvamComponent } from './ivam.component';

describe('IvamComponent', () => {
  let component: IvamComponent;
  let fixture: ComponentFixture<IvamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
