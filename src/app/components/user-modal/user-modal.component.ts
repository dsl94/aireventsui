import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    fullName: null,
    email: null,
    password: null,
    gender: null,
    phone: null,
    info: null,
    membershipUntil: null,
    medicalUntil: null,
  };
  constructor(private userService: UserService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.userService.createUser(this.form).subscribe(
      data => {
          this.createdEvent.emit();
        this.toastr.success("Član uspešno kreiran");
          // @ts-ignore
        document.getElementById('closeMappingModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
