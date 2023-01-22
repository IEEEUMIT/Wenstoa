import { Component , OnInit } from '@angular/core';
import { navbar } from '../JSONDATA/navbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  navdata: any;

  user:any;
  ngOnInit(): void{
    this.navdata = navbar;
  }
}
