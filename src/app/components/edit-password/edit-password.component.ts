import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {
  form: any = {
    newPassword: null
  }

  constructor(private userService: UserService, private toastr: ToastrService) {
  }

  onSubmit() {
    this.userService.changePassword(this.form.newPassword).subscribe(data => {
      this.toastr.success("Lozinka uspešno promenjena");
    }, error => {
      this.toastr.error("Došlo je do greške");
    });
  }
}
