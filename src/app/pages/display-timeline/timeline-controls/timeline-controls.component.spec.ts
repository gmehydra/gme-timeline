import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './timeline-controls.component';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlsComponent]
    });
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
