import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventDetails, EventRequest} from "../dto/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll() {
    return this.http.get<EventDetails[]>(this.baseUrl + '/event');
  }

  create(request: EventRequest) {
    return this.http.post(this.baseUrl + '/event', request);
  }

  get(id: any) {
    return this.http.get<EventDetails>(this.baseUrl + '/event/' + id);
  }

  update(id: number, request: EventRequest) {
    return this.http.put<EventDetails>(this.baseUrl + '/event/' + id, request);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/event/' + id);
  }

  go(id: number, distance: number) {
    return this.http.put<EventDetails>(this.baseUrl + '/event/' + id + '/go/'+distance, null);
  }

  noGo(id: number) {
    return this.http.put<EventDetails>(this.baseUrl + '/event/' + id + '/no-go', null);
  }

  pay(id: number) {
    return this.http.post<EventDetails>(this.baseUrl + '/event/' + id + '/paid', null);
  }

  changeDistance(id: number, distance: number) {
    return this.http.post(this.baseUrl + '/event/' + id + '/distance/' + distance, null);
  }

  getPublicEvent(eventId: number) {
    return this.http.get<any[]>(this.baseUrl + '/event/public/event/' + eventId);
  }
}
