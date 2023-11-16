import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {
  form: any = {
    newPassword: null
  }

  stravaLogin: boolean = false;

  constructor(private userService: UserService, private toastr: ToastrService, private tokenService: TokenService) {
    this.stravaLogin = this.tokenService.getUser().stravaLogin;
  }

  onSubmit() {
    this.userService.changePassword(this.form.newPassword).subscribe(data => {
      this.toastr.success("Lozinka uspešno promenjena");
    }, error => {
      this.toastr.error("Došlo je do greške");
    });
  }
}
