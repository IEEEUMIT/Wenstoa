import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SponsorComponent } from './sponsor/sponsor.component';
<<<<<<< HEAD
import { EventsComponent } from './MyComponent/events/events.component';
=======
import { TimelineComponent } from './timeline/timeline.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 5b90fe0a30e3b2126d56fb751005f153dab9cb41


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SponsorComponent,
<<<<<<< HEAD
    EventsComponent
=======
    TimelineComponent,
    FooterComponent
>>>>>>> 5b90fe0a30e3b2126d56fb751005f153dab9cb41
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
