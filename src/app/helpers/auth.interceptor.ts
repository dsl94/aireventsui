import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import { TokenService } from '../services/token.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {catchError} from "rxjs/operators";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenService, private router: Router, private toastr: ToastrService) { }

  private handleAuthError(err: HttpErrorResponse, url: string): Observable<any> {
    //handle your auth error or rethrow
    if (!url.includes('login')) {
      if (err.status === 401 || err.status === 403) {
        //navigate /delete cookies or whatever
        this.toastr.error("Your token has expired, please login again");
        this.router.navigateByUrl(`/login`);
        // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
        return of(err.message); // or EMPTY may be appropriate here
      }
    }
    return throwError(err);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x, req.url)));
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
