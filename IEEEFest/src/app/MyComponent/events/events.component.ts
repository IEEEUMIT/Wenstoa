import { Component, OnInit } from '@angular/core';
import { events } from 'src/app/JSONDATA/events'; 

<<<<<<< HEAD



import { event } from 'src/app/JSONDATA/event'; 


// import {events} from 'src/app/JSONDATA/events'; 

// import { events} from 'src/app/JSONDATA/events'; 


=======
>>>>>>> eb15fc1c5c41d8652b898645eca8ff13286ae68b
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
