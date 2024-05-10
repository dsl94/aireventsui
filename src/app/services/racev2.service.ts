import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RaceDetails, RaceRequest} from "../dto/race-details.model";
import {RaceType} from "../dto/race-type.model";

@Injectable({
  providedIn: 'root'
})
export class RaceV2Service {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getRaceTypes() {
    return this.http.get<RaceType[]>(this.baseUrl + '/race-type');
  }
}
