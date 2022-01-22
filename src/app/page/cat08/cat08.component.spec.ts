import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat08Component } from './cat08.component';

describe('Cat08Component', () => {
  let component: Cat08Component;
  let fixture: ComponentFixture<Cat08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat08Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
