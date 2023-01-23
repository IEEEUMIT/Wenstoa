import { Component, OnInit } from '@angular/core';




import { event } from 'src/app/JSONDATA/event'; 


// import {events} from 'src/app/JSONDATA/events'; 

// import { events} from 'src/app/JSONDATA/events'; 

; 
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
    this.eventdel=event;
  }


}
