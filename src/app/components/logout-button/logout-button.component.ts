import { Component } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {
  constructor(private tokenService: TokenService, private router: Router) { }
  logout() {
    this.tokenService.signOut();
    this.router.navigate(['/login']);
  }
}
