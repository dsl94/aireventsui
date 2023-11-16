import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../dto/user-details.model";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin-guests-table',
  templateUrl: './admin-guests-table.component.html',
  styleUrls: ['./admin-guests-table.component.css']
})
export class AdminGuestsTableComponent implements OnInit{
  users: UserDetails[] = []
  forDelete = -1;

  constructor(private userService: UserService, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.userService.getAllGuests().subscribe(data => {
      this.users = data;
    });
  }

  delete() {
    this.userService.deleteUser(this.forDelete).subscribe(data => {
      this.load();
      this.toastr.success("Gost izbrisan");
    });
  }

  markForDelete(id: number) {
    this.forDelete = id;
  }
}
