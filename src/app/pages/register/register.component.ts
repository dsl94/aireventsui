import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Register} from "../../dto/register.model";

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
    vatsimId: null,
    ivaoId: null,
    posconId: null,
  };
  registerFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  onSubmit() {
    const register = new Register(
      this.form.email,
      this.form.fullName,
      this.form.password,
      this.form.vatsimId,
      this.form.ivaoId,
      this.form.posconId
    );
    this.authService.register(register).subscribe((data) => {
        this.toastr.success('Registration successful')
        // this.router.navigate(['/login']);
      },
      error => {
        this.toastr.error(error.error.message)
        this.registerFailed = true;
      });
  }
}
