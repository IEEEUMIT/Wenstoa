import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { events} from 'src/app/JSONdata/events'; 
>>>>>>> fbcd309f6152494f52739360041152a726a8274d

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
