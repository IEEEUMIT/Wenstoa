import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpageComponent } from './eventpage.component';
// import { event } from '../JSONDATA/event';

describe('EventpageComponent', () => {
  let component: EventpageComponent;
  let fixture: ComponentFixture<EventpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
