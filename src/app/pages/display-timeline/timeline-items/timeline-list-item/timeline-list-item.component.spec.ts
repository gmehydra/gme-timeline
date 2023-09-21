import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineListItemComponent } from './timeline-list-item.component';

describe('TimelineListItemComponent', () => {
  let component: TimelineListItemComponent;
  let fixture: ComponentFixture<TimelineListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineListItemComponent]
    });
    fixture = TestBed.createComponent(TimelineListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
