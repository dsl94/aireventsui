import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../dto/user-details.model";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {RaceDetails} from "../../dto/race-details.model";
import {RaceService} from "../../services/race.service";
import {TokenService} from "../../services/token.service";
import {RaceType} from "../../dto/race-type.model";
import {RaceV2Service} from "../../services/racev2.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit{
  types: RaceType[] = []
  loaded = false;
  activeTab: number = 0; // Default to the first tab

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  constructor(private raceService: RaceV2Service, private toastr: ToastrService, private tokenService: TokenService) {
  }
  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    // this.userId = this.tokenService.getUser().id;
    // this.rawRole = roles[0];
    // if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
    //   this.isAdmin = true;
    // }
    this.load();
  }

  load() {
    this.raceService.getRaceTypes().subscribe(data => {
      this.types = data;
      this.loaded = true;
    });
  }
}
