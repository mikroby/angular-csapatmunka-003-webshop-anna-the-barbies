import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat10Component } from './cat10.component';

describe('Cat10Component', () => {
  let component: Cat10Component;
  let fixture: ComponentFixture<Cat10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
