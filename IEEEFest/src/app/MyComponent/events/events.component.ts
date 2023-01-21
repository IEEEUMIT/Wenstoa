import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { events } from 'src/app/JSONDATA/events'; 
// import { events } from 'src/app/JSONdata/events'; 

=======
import { events} from 'src/app/JSONdata/events'; 
>>>>>>> e753398c5406b16de89dd52e708643c0dc0b1d8c

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
