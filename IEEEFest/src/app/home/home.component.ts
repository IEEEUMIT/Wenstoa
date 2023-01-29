import { Component, OnInit } from '@angular/core';
import { events } from '../JSONDATA/events';
import { footer } from '../JSONDATA/footer';
import { sponsors } from '../JSONDATA/sponsor';
import { FAQ } from '../JSONDATA/faq';
import { timeline } from '../JSONDATA/timeline';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   eventdel:any;
  timelinedel:any;   
  faq:any = [];
  faqDisplay: Array<Boolean> = []
  footer: any;
  spons:any;
  user:any;
  ngOnInit(): void{
    this.eventdel=events;
    this.footer = footer ;
    this.spons=sponsors ;
    this.timelinedel=timeline;
    this.faq=FAQ;
    for(let i of this.faq){
      this.faqDisplay.push(false);
    }
  }
  toggleFAQ(idx: number){
    this.faqDisplay[idx] = !this.faqDisplay[idx];
    this.spons=sponsors;
    this.eventdel=events;
  }
}



