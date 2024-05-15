import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserDetails} from "../../dto/user-details.model";
import {Toast, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public id: number = 0;
  //@ts-ignore
  public user: UserDetails = null

  form: any = {
    fullName: null,
    membershipUntil: null,
    medicalUntil: null,
    phone: null,
    info: null,
    shirtSize: null,
  };

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private toasts: ToastrService) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.load();
  }

  load() {
    this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
      this.form.fullName = this.user.fullName;
      this.form.phone = this.user.phone;
      this.form.info = this.user.info;
      this.form.shirtSize = this.user.shirtSize;
      const parts = this.user.membershipUntil.split('-');
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year = parseInt(parts[2]);
      const date = new Date(year, month, day, 23, 59);
      this.form.membershipUntil = date.toISOString().substring(0, 10);

      const parts1 = this.user.medicalUntil.split('-');
      const day1 = parseInt(parts1[0]);
      const month1 = parseInt(parts1[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year1 = parseInt(parts1[2]);
      const date1 = new Date(year1, month1, day1, 23, 59);
      this.form.medicalUntil = date1.toISOString().substring(0, 10);
    });
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.form.fullName, this.form.membershipUntil, this.form.shirtSize, this.form.phone, this.form.info, this.form.medicalUntil).subscribe(data => {
      this.load();
      this.toasts.success("Član uspešno izmenjen")
    });
  }

  getGender(gender: any) {
    if (gender == 'M') {
      return "Muškarac";
    } else {
      return 'Žena';
    }
  }
}
