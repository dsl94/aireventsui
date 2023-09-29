import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../dto/user-details.model";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {RaceDetails, RaceRequest} from "../../dto/race-details.model";
import {RaceService} from "../../services/race.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {
  public id: number = 0;
  //@ts-ignore
  public race: RaceDetails = null
  rawRole: string = '';
  isAdmin = false;

  form: any = {
    title: null,
    date: null,
    distances: null,
  };

  constructor(private raceService: RaceService, private tokenService: TokenService, private activatedRoute: ActivatedRoute, private toasts: ToastrService) {

  }

  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.rawRole = roles[0];
    if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
      this.isAdmin = true;
    }
    this.id = this.activatedRoute.snapshot.params['id'];
    this.load();
  }

  load() {
    this.raceService.get(this.id).subscribe(data => {
      this.race = data;
      console.log(this.race)
      this.form.title = this.race.title;
      this.form.distances = this.race.distances;
      const parts = this.race.date.split('-');
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year = parseInt(parts[2]);
      const date = new Date(year, month, day, 23, 59);
      this.form.date = date.toISOString().substring(0, 10);
    });
  }

  onSubmit() {
    this.raceService.update(this.id, new RaceRequest(this.form.title, this.form.date, this.form.distances))
      .subscribe(data => {
        this.load();
        this.toasts.success("Trka usepšno izmenjena");
      });
  }
}
