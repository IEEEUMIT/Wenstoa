import { Injectable } from '@angular/core';
import { question } from '../model/question';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  Question: question[];
  //<p-checkbox [binary]="true" [(ngModel)]="checked"></p-checkbox>
  constructor() { 
    
      this.Question=[{
        text: 'What is 360 Degrees + ?',
        answer:'The 360 Degrees Plus is the technical fest of IEEE UMIT It helps students strengthen their knowledge and hone their technical skills',
        hide:true
    },
    {
      text: 'What are the 360+ 2023 dates?',
      answer:'The dates of 360+ are February 3-5. Prepare for the three craziest days of the year!',
      hide:true
    },
    {
      text: "What is this year's theme ?",
      answer:'Mumbai',
      hide:true
  },
  {
    text: 'What does Wenstoa means ?',
    answer:'Wenstoa means "City of arcades"',
    hide:true
 },
 {
  text: 'In how many event each person can participate ?',
  answer:'You can participate in all the events :)',
  hide:true
 },
 {
  text: 'Are there any prizes for the winners?',
  answer:'You will get Exciting prizes from our sponsors. So come on, Hurry up and register for our events.',
  hide:true
 },
 {
  text: 'How many Technical and Non-technical events are organized ?',
  answer:'IEEE Fest organizes 4 Technical and 5 Non-technical events',
  hide:true
 },
 {
  text: 'Do I get a break if I submit many applications?',
  answer:'No, there is not such a policy; but, if you are a member of IEEE, you will receive a discount.',
  hide:true
 },
 {
  text: 'Which competitions shall be conducted online this year?',
  answer:'There will no event conducted online this year.',
  hide:true
 },
 {
  text: 'What is the date, time and venue for these competitions?',
  answer:'The detailed schedule of the competitions will be released later. Stay tuned to our social media handles',
  hide:true
 },
 {
  text: 'Am I supposed to register for the group competition myself?',
  answer:'If you are the team leader, you must go to the competition you are interested in and create a team and submit the required fee.',
  hide:true
 },
 {
  text: 'Will I get a certificate for participation in competitions during 360+?',
  answer:'Yes everyone participating will get a certificate of participation.',
  hide:true
 },
 {
  text: 'Can people of any age-group attend 360+?',
  answer:'No, Only college students are allowed.',
  hide:true
 },
 
  ];
  }
  getquestion() {
    return this.Question;
  }
    
  
}
