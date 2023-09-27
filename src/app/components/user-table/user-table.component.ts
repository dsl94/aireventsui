import {Component, OnInit} from '@angular/core';
import {AircraftMapping} from "../../dto/aircraft-mapping.model";
import {UserDetails} from "../../dto/user-details.model";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
  users: UserDetails[] = []
  forDelete = -1;

  constructor(private userService: UserService, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  delete() {
    this.userService.deleteUser(this.forDelete).subscribe(data => {
      this.load();
      this.toastr.success("Član izbrisan");
    });
  }

  markForDelete(id: number) {
    this.forDelete = id;
  }

  getColorForDate(inputDateStr: string): string {
    if (inputDateStr) {
      const parts = inputDateStr.split("-");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed in JavaScript
      const year = parseInt(parts[2], 10);

      const inputDate = new Date(year, month, day);
      console.log(inputDate)
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set the time to midnight for accurate comparison

      // Calculate the time difference in milliseconds
      const timeDifference = inputDate.getTime() - currentDate.getTime();

      if (timeDifference < 0) {
        // The input date is before today
        return "danger";
      } else if (timeDifference <= 30 * 24 * 60 * 60 * 1000) {
        // Less than or equal to 30 days (1 month) away
        return "warning";
      } else {
        // More than 30 days (1 month) away
        return "success";
      }
    }
   return ""
  }
}
