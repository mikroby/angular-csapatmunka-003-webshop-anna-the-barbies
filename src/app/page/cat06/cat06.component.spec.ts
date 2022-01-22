import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat06Component } from './cat06.component';

describe('Cat06Component', () => {
  let component: Cat06Component;
  let fixture: ComponentFixture<Cat06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
