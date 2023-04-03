import {Component, OnInit} from '@angular/core';
import {AircraftMapping} from "../../dto/aircraft-mapping.model";
import {UserDetails} from "../../dto/user-details.model";
import {AircraftMappingService} from "../../services/aircraft-mapping.service";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
  users: UserDetails[] = []

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

  delete() {}
}
