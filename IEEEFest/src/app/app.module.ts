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
import { EventpageComponent } from './eventpage/eventpage.component';

>>>>>>> f96cd7ad7208222e2999849fc310a010b564683c


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
    EventComponent
=======
    EventpageComponent
>>>>>>> f96cd7ad7208222e2999849fc310a010b564683c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
