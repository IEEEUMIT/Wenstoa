import { Component } from '@angular/core';
import { event } from '../JSONDATA/event';
import { footer } from '../JSONDATA/footer';
import { sponsors } from '../JSONDATA/sponsor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  footer: any;
  spons:any;
  user:any;
  ngOnInit(): void{
    this.footer = footer ;
    this.spons=sponsors
  }
}



