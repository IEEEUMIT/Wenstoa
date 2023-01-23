import { Component, OnInit } from '@angular/core';
import { event } from 'src/app/JSONDATA/event'; 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  // evens:any;
  // ngOnInit(): void {
  //   this.evens=events
  // }
  eventdel:any;
  constructor() {}
  
  ngOnInit(): void {
    this.eventdel=events;
  }


}
