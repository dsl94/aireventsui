import {Component, OnInit} from '@angular/core';
import {Token} from "@angular/compiler";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  fullName: string = '';
  role: string = '';
  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.fullName = this.tokenService.getUser().fullName;
    let roles = this.tokenService.getUser().roles;
    if(roles.includes('ROLE_USER')) {
      this.role = "Pilot";
    } else if (roles.includes('ROLE_ADMIN')) {
      this.role = "Dispatcher";
    }
  }

}
