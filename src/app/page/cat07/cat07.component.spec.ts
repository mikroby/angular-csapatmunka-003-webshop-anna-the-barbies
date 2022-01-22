import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat07Component } from './cat07.component';

describe('Cat07Component', () => {
  let component: Cat07Component;
  let fixture: ComponentFixture<Cat07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat07Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
