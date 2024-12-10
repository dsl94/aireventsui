import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Register, RegisterGuest} from "../dto/register.model";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface StravaCred {
  clientId: string;
  clientSecret: string;
}

export interface StravaAthlete {
  id: number;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  sex: string;
}

export interface StravaLoginResponse {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: StravaAthlete;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string, private tokenService: TokenService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/auth', {
      username,
      password
    }, httpOptions);
  }

  // @ts-ignore
  stravaLogin(code: any) {
    let loginData : any = null
    this.http.get<StravaCred>(this.baseUrl + "/strava/credentials").subscribe(data => {
      this.http.post("https://www.strava.com/oauth/token?client_id=" + data.clientId + "&client_secret=" + data.clientSecret + "&code="+code+"&grant_type=authorization_code", {})
        .subscribe(sd => {
          console.log("sd")
          return this.http.post <StravaLoginResponse>(this.baseUrl + "/strava/login", sd).subscribe(logindata => {
            loginData = logindata;
            this.tokenService.saveToken(loginData.token);
            this.tokenService.saveUser(loginData);

            const roles = this.tokenService.getUser().roles;
            console.log(loginData)
            console.log(loginData);
            if(roles.includes('ROLE_SYSTEM_ADMIN')) {
              this.redirect()
            } else if (roles.includes('ROLE_USER')) {
              this.redirectUser()
            } else {
              this.redirectGuest();
            }
          })
        })
    })

    return loginData
  }


  redirect() {
    var a =document.createElement("a")

    a.href="/admin/users"

    a.click()
  }

  redirectUser() {
    var a =document.createElement("a")

    a.href="/user/races"

    a.click()
  }

  redirectGuest() {
    var a =document.createElement("a")

    a.href="/guest/challenges"

    a.click()
  }

  register(register: Register) {
    return this.http.post(this.baseUrl + '/auth/register', register);
  }

  registerGuest(register: RegisterGuest) {
    return this.http.post(this.baseUrl + '/auth/register-guest', register);
  }
}
