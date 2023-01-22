import { Component, OnInit } from '@angular/core';
import { sponsors } from '../JSONDATA/sponsor';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit{
  spons:any;    
  ngOnInit(): void {
        this.spons=sponsors
      }
}
