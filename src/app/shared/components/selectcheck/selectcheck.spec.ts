import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectcheck } from './selectcheck';

describe('Selectcheck', () => {
  let component: Selectcheck;
  let fixture: ComponentFixture<Selectcheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selectcheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selectcheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
