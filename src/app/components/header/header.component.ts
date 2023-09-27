import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rawRole: string = '';
  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.rawRole = roles[0];
  }
}
