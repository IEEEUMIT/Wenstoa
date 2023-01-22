import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD

import { events } from 'src/app/JSONDATA/events'; 

=======
<<<<<<< HEAD

=======


import { events} from '../../JSONDATA/events'; 

// import { events} from 'src/app/JSONDATA/events'; 

>>>>>>> a5e24477cdf07c189bb532015b38c3fe2e5fba0f
>>>>>>> e63d2bbc81945f42bcf17644d3d54c738a549eb6

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
