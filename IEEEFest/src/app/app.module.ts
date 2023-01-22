import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { EventsComponent } from './MyComponent/events/events.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD

import { EventComponent } from './event/event.component';

=======
>>>>>>> a5e24477cdf07c189bb532015b38c3fe2e5fba0f
import { EventpageComponent } from './eventpage/eventpage.component';
import { FaqComponent } from './faq/faq.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SponsorComponent,
    EventsComponent,
    TimelineComponent,
    FooterComponent,
<<<<<<< HEAD

    EventComponent,

    EventpageComponent

=======
    EventpageComponent,
    FaqComponent
>>>>>>> a5e24477cdf07c189bb532015b38c3fe2e5fba0f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
