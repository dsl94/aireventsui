import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../dto/user-details.model";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //@ts-ignore
  public user: UserDetails = null

  form: any = {
    fullName: null,
    membershipUntil: null,
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
      const parts = this.user.membershipUntil.split('-');
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year = parseInt(parts[2]);
      const date = new Date(year, month, day, 23, 59);
      this.form.membershipUntil = date.toISOString().substring(0, 10);
    });
  }

  onSubmit() {

  }
}
