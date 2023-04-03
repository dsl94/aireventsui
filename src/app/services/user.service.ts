import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Register} from "../dto/register.model";
import {Observable} from "rxjs";
import {AircraftMapping} from "../dto/aircraft-mapping.model";
import {UserDetails} from "../dto/user-details.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAllUsers() {
    return this.http.get<UserDetails[]>(this.baseUrl + '/sys-admin/user');
  }
}
