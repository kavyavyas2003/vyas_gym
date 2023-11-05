import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadingComponent } from './subheading.component';

describe('SubheadingComponent', () => {
  let component: SubheadingComponent;
  let fixture: ComponentFixture<SubheadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubheadingComponent]
    });
    fixture = TestBed.createComponent(SubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
