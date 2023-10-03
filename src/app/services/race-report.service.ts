import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RaceDetails, RaceReportDetails, RaceReportRequest, RaceRequest} from "../dto/race-details.model";

@Injectable({
  providedIn: 'root'
})
export class RaceReportService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll() {
    return this.http.get<RaceReportDetails[]>(this.baseUrl + '/race-report');
  }

  create(request: RaceReportRequest) {
    return this.http.post(this.baseUrl + '/race-report', request);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/race-report/' + id);
  }
}
