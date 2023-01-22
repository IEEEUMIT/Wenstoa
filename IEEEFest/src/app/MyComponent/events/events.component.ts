import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
=======
import { events} from '../../JSONDATA/events'; 

// import { events} from 'src/app/JSONDATA/events'; 
>>>>>>> bfbcae42012dc7baa7a78a20676ffb531d8acc97

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
