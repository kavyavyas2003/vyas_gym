import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinComponent } from './slidein.component';

describe('SlideinComponent', () => {
  let component: SlideinComponent;
  let fixture: ComponentFixture<SlideinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideinComponent]
    });
    fixture = TestBed.createComponent(SlideinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
