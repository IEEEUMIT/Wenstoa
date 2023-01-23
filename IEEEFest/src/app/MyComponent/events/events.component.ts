import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD

=======
>>>>>>> 521708b5ef33c484f03c4235b27dcaf4280be56e



import { event } from 'src/app/JSONDATA/event'; 


// import {events} from 'src/app/JSONDATA/events'; 

// import { events} from 'src/app/JSONDATA/events'; 

<<<<<<< HEAD

=======
; 
>>>>>>> 521708b5ef33c484f03c4235b27dcaf4280be56e
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
