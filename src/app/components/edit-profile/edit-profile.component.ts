import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../dto/user-details.model";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent  implements OnInit {
  //@ts-ignore
  public user: UserDetails = null

  form: any = {
    fullName: null,
    email: null,
    stravaId: null,
    phone: null,
    shirtSize: null,
    info: null,
  };

  constructor(private userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.userService.getProfile().subscribe(data => {
      this.user = data;
      this.form.fullName = this.user.fullName;
      this.form.email = this.user.email;
      this.form.stravaId = this.user.stravaId;
      this.form.phone = this.user.phone;
      this.form.shirtSize = this.user.shirtSize;
      this.form.info = this.user.info;
      const parts = this.user.membershipUntil.split('-');
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year = parseInt(parts[2]);
      const date = new Date(year, month, day, 23, 59);
      this.user.membershipUntil = date.toISOString().substring(0, 10);
    });
  }

  onSubmit() {
    this.userService.updateProfile(this.form.fullName, this.form.email, this.form.stravaId, this.form.phone, this.form.shirtSize, this.form.info).subscribe(data => {
      this.load();
      this.toastr.success("Profil uspešno izmenjen");
    })
  }

  getGender(gender: any) {
    if (gender == 'M') {
      return "Muškarac";
    } else {
      return 'Žena';
    }
  }
}
