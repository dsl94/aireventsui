import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RaceDetails, RaceRequest} from "../dto/race-details.model";
import {ChallengeDetails, ChallengeRequest} from "../dto/challenge.model";
import {PlanResponse} from "../dto/shop.model";

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }


  create(request: any) {
    return this.http.post(this.baseUrl + '/chat', request);
  }

  get() {
    return this.http.get<PlanResponse>(this.baseUrl + '/plan');
  }
}
