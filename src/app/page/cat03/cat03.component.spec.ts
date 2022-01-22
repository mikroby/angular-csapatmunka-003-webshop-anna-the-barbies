import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat03Component } from './cat03.component';

describe('Cat03Component', () => {
  let component: Cat03Component;
  let fixture: ComponentFixture<Cat03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
