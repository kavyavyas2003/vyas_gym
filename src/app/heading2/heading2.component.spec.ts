import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heading2Component } from './heading2.component';

describe('Heading2Component', () => {
  let component: Heading2Component;
  let fixture: ComponentFixture<Heading2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Heading2Component]
    });
    fixture = TestBed.createComponent(Heading2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
