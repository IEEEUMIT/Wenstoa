import { Component } from '@angular/core';
import { footer } from '../JSONDATA/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer: any;

  user:any;
  ngOnInit(): void{
    this.footer = footer ;
  }
}
