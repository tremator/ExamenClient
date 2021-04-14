import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events-service.service';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events : any;
  form: any = {
    description: null,
    initialDate: null,
    endDate: null
  };
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
   // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  constructor(private service: EventsService) { 
    this.events = [];
  }

  ngOnInit(): void {
    this.getEvents();
    
  }

  getEvents(){
    this.service.getEvents().subscribe((response) => {

      if(response != null){
        this.events = response
        var newEvents = [];
        this.events.forEach(element => {
          var eventSource = {
            title: element.description,
            date : element.initialDate
          }
          newEvents.push(eventSource);
        
        });

        this.calendarOptions.events = newEvents;
        console.log(response);
      }
    })
  }

  deleteEvent(id: number){
    this.service.deleteEvent(id).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    })
    
  }

  postEvent(){
    const { description, initialDate, endDate } = this.form;
    var authinfo = {
      "description":description,
      "initialDate":initialDate,
      "endDate": endDate
    }
    console.log(authinfo)
    this.service.postEvent(authinfo).subscribe((response)=> {
      console.log(response);
      this.ngOnInit();
    })
    
  }
  

}
