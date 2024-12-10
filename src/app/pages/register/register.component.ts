import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Register, RegisterGuest} from "../../dto/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    email: null,
    fullName: null,
    password: null,
  };
  registerFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  onSubmit() {
    const register = new RegisterGuest(
      this.form.email,
      this.form.fullName,
      this.form.password,
    );
    this.authService.registerGuest(register).subscribe((data) => {
        this.toastr.success('Registracija usepšna, prijavit se')
        this.router.navigate(['/login']);
      },
      error => {
        this.toastr.error(error.error.message)
        this.registerFailed = true;
      });
  }
}
