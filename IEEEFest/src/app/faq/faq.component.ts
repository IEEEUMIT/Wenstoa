import { Component, OnInit } from '@angular/core';
import { FAQ } from '../JSONDATA/faq';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent  implements OnInit{
  faq:any = [];

  faqDisplay: Array<Boolean> = []

  ngOnInit(): void {
    
    this.faq=FAQ;
    for(let i of this.faq){
      this.faqDisplay.push(false);
    }
  }

  toggleFAQ(idx: number){
    this.faqDisplay[idx] = !this.faqDisplay[idx];
  }


}

  


