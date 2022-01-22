import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat04Component } from './cat04.component';

describe('Cat04Component', () => {
  let component: Cat04Component;
  let fixture: ComponentFixture<Cat04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
