import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mnudesplegable } from './mnudesplegable';

describe('Mnudesplegable', () => {
  let component: Mnudesplegable;
  let fixture: ComponentFixture<Mnudesplegable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mnudesplegable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mnudesplegable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
