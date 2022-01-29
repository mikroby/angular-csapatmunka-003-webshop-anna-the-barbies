import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPolisherComponent } from './category-polisher.component';

describe('CategoryPolisherComponent', () => {
  let component: CategoryPolisherComponent;
  let fixture: ComponentFixture<CategoryPolisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPolisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPolisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
