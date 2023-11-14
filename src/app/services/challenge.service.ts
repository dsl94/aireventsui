import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RaceDetails, RaceRequest} from "../dto/race-details.model";
import {ChallengeDetails, ChallengeRequest} from "../dto/challenge.model";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll() {
    return this.http.get<ChallengeDetails[]>(this.baseUrl + '/challenge');
  }

  create(request: ChallengeRequest) {
    return this.http.post(this.baseUrl + '/challenge', request);
  }

  get(id: any) {
    return this.http.get<ChallengeDetails>(this.baseUrl + '/challenge/' + id);
  }

  update(id: number, request: ChallengeRequest) {
    return this.http.put<ChallengeDetails>(this.baseUrl + '/challenge/' + id, request);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/challenge/' + id);
  }

  go(id: number) {
    return this.http.put<ChallengeDetails>(this.baseUrl + '/challenge/' + id + '/go', null);
  }

  noGo(id: number) {
    return this.http.put<ChallengeDetails>(this.baseUrl + '/challenge/' + id + '/no-go', null);
  }
}
