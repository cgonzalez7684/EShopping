import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtpicker } from './dtpicker';

describe('Dtpicker', () => {
  let component: Dtpicker;
  let fixture: ComponentFixture<Dtpicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dtpicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtpicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
