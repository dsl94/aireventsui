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

  getAllGuests() {
    return this.http.get<UserDetails[]>(this.baseUrl + '/sys-admin/user/guests');
  }

  createUser(request: any) {
    return this.http.post(this.baseUrl + '/sys-admin/user', request);
  }

  getUser(id: any) {
    return this.http.get<UserDetails>(this.baseUrl + '/sys-admin/user/' + id);
  }

  updateUser(id: any, fullName: string, membershipUntil: any, shirtSize: any, phone: any, info: any) {
    return this.http.put<UserDetails>(this.baseUrl + '/sys-admin/user/' + id, {fullName, membershipUntil, shirtSize, phone, info});
  }

  deleteUser(id: any) {
    return this.http.delete(this.baseUrl + '/sys-admin/user/' + id);
  }

  getProfile() {
    return this.http.get<UserDetails>(this.baseUrl + '/profile');
  }

  updateProfile(fullName: string, email: any, stravaId: string, phone: string, shirtSize: any, info: any) {
    return this.http.put<UserDetails>(this.baseUrl + '/profile', {fullName, email, stravaId, phone, shirtSize, info});
  }

  changePassword(newPassword: string) {
    return this.http.put(this.baseUrl + '/profile/password', {newPassword});
  }

  loginToStrava(code: any) {
    return this.http.post(this.baseUrl + "/strava", {code})
  }
}
