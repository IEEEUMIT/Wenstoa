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
        text: 'what is your name',
        answer:'akanksha',
        hide:false
    },
    {
      Text: 'what is your name',
      answer:'akanksha',
      hide:true
  },
  {
    Text: 'what is your name',
    answer:'akanksha',
    hide:true
 },
 {
  Text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  Text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  Text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  Text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
 {
  text: 'what is your name',
  answer:'akanksha',
  hide:true
 },
  ];
  }
  getquestion() {
    return this.Question;
  }
    
  
}
