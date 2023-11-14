import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Register} from "../../dto/register.model";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let code = this.activatedRoute.snapshot.queryParams['code'];
    console.log(code)
    if (code) {
      this.authService.stravaLogin(code).subscribe(data => {
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        console.log(data);
        if(this.roles.includes('ROLE_SYSTEM_ADMIN')) {
          this.redirect()
        } else {
          this.redirectUser()
        }
      });
    }
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
      if(this.roles.includes('ROLE_USER')) {
        this.redirect();
      } else if (this.roles.includes('ROLE_SYSTEM_ADMIN')) {
        this.router.navigate(['/admin/dashboard']);
      }
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        if(this.roles.includes('ROLE_SYSTEM_ADMIN')) {
          this.redirect()
        } else {
          this.redirectUser()
        }
      },
      err => {
        this.toastr.error("Podaci nisu ispravni");
      }
    );
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
}
