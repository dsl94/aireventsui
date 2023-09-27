import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RaceDetails, RaceRequest} from "../dto/race-details.model";

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll() {
    return this.http.get<RaceDetails[]>(this.baseUrl + '/race');
  }

  create(request: RaceRequest) {
    return this.http.post(this.baseUrl + '/race', request);
  }

  get(id: any) {
    return this.http.get<RaceDetails>(this.baseUrl + '/race/' + id);
  }

  update(id: number, request: RaceRequest) {
    return this.http.put<RaceDetails>(this.baseUrl + '/race/' + id, request);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/race/' + id);
  }
}
