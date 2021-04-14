import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { EventsService } from '../app/services/events-service.service';
import { FormsModule } from '@angular/forms';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FullCalendarModule,
    FormsModule
  ],
  providers: [
    HttpClient,EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
