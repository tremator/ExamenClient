import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('https://localhost:5001/api/events');
  }

  deleteEvent(id: number){
    const httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete('https://localhost:5001/api/events/'+id,httpOptions)
  }
  postEvent(event: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://localhost:5001/api/events', event, httpOptions);
  }

}
