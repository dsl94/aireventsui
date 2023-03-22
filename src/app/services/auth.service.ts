import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Register} from "../dto/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  register(register: Register) {
    return this.http.post(this.baseUrl + '/auth/register', register);
  }
}
