import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-convert-guest-modal',
  templateUrl: './convert-guest-modal.component.html',
  styleUrls: ['./convert-guest-modal.component.css']
})
export class ConvertGuestModalComponent {
  @Input()
  id: number = -1;
  @Output() createdEvent = new EventEmitter();
  form: any = {
    email: null,
    membershipUntil: null,
  };
  constructor(private userService: UserService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.userService.convertGuest(this.id, this.form.email, this.form.membershipUntil).subscribe(
      data => {
        this.createdEvent.emit();
        this.toastr.success("Gost usppešno pretvoren u člana");
        // @ts-ignore
        document.getElementById('closeMappingModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
