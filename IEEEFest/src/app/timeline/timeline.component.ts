import { Component, OnInit } from '@angular/core';
import { timeline } from 'src/app/JSONdata/timeline';


@Component({

  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{
  timelinedel:any;    
  ngOnInit(): void {
        this.timelinedel=timeline
      }
}
