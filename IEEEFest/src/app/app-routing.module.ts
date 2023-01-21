import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventpageComponent } from './eventpage/eventpage.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './MyComponent/events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'eventpage',component:EventpageComponent},
  {path: 'events',component:EventsComponent},
  {path: 'timeline',component:TimelineComponent},
  {path: 'sponsor',component:SponsorComponent},
  {path: 'faq',component:FaqComponent},
  {path: 'faq-list',component:FaqListComponent},
  {path: 'footer',component:FooterComponent},
  {path: 'navbar',component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
