import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Register} from "../dto/register.model";
import {Observable} from "rxjs";
import {AircraftMapping} from "../dto/aircraft-mapping.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AircraftMappingService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAllMappings() {
    return this.http.get<AircraftMapping[]>(this.baseUrl + '/sys-admin/aircraft-mapping');
  }

  createMapping(simKey: string, icao: string) {
    return this.http.post(this.baseUrl + '/sys-admin/aircraft-mapping', {simKey, icao});
  }
}
