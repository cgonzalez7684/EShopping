import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidermonto } from './slidermonto';

describe('Slidermonto', () => {
  let component: Slidermonto;
  let fixture: ComponentFixture<Slidermonto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slidermonto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slidermonto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
