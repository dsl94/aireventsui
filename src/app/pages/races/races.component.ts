import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../dto/user-details.model";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {RaceDetails} from "../../dto/race-details.model";
import {RaceService} from "../../services/race.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit{
  races: RaceDetails[] = []
  forDelete = -1;

  rawRole: string = '';

  isAdmin = false;

  constructor(private raceService: RaceService, private toastr: ToastrService, private tokenService: TokenService) {
  }
  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.rawRole = roles[0];
    if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
      this.isAdmin = true;
    }
    this.load();
  }

  load() {
    this.raceService.getAll().subscribe(data => {
      this.races = data;
    });
  }

  delete() {
    this.raceService.delete(this.forDelete).subscribe(data => {
      this.load();
      this.toastr.success("Trka izbrisana");
    });
  }

  markForDelete(id: number) {
    this.forDelete = id;
  }
}
