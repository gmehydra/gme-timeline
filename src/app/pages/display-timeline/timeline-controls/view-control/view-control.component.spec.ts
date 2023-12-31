import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewControlComponent } from './view-control.component';

describe('ViewControlComponent', () => {
  let component: ViewControlComponent;
  let fixture: ComponentFixture<ViewControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewControlComponent]
    });
    fixture = TestBed.createComponent(ViewControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
