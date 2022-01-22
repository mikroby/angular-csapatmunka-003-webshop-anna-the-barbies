import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat09Component } from './cat09.component';

describe('Cat09Component', () => {
  let component: Cat09Component;
  let fixture: ComponentFixture<Cat09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
