import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RaceDetails, RaceReportDetails, RaceReportRequest, RaceRequest} from "../dto/race-details.model";

@Injectable({
  providedIn: 'root'
})
export class RaceReportService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll(fromDate?: string | null, toDate?: string | null) {
    let url = this.baseUrl + '/race-report';
    let params = new HttpParams();
    if (fromDate) {
      params = params.set('fromDate', fromDate);
    }
    if (toDate) {
      params = params.set('toDate', toDate);
    }

    return this.http.get<RaceReportDetails[]>(url, { params });
  }

  create(request: RaceReportRequest) {
    return this.http.post(this.baseUrl + '/race-report', request);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/race-report/' + id);
  }
}
