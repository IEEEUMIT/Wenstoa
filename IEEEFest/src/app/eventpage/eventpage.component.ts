import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { event } from '../JSONDATA/event';
@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit{
  eventdetail:any;
  
  constructor(router: Router) {}
  
  noti = ["noti2", "noti3", "noti4", "noti5", "noti6"];
  
  events: any = []
  event: number = 0;
  user: any;
  notification: Array<any> = [];
  
  tab: number = 3;
  ngOnInit(): void {
    this.eventdetail=event;
  }
  toggleTabs(t: number) {
    this.tab = t;
  }
  toggleEvent(ind: number) {
    this.event = ind;
  }

}
