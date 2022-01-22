import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat05Component } from './cat05.component';

describe('Cat05Component', () => {
  let component: Cat05Component;
  let fixture: ComponentFixture<Cat05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
