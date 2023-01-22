import { Component } from '@angular/core';
import { event } from '../JSONDATA/event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  eventdetail:any;
  constructor() {}
  
  ngOnInit(): void {
    this.eventdetail=event;
  }

}
