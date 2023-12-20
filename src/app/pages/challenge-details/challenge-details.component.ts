import {Component, OnInit} from '@angular/core';
import {RaceDetails, RaceRequest} from "../../dto/race-details.model";
import {RaceService} from "../../services/race.service";
import {TokenService} from "../../services/token.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ChallengeDetails, ChallengeRequest, UserChallenge} from "../../dto/challenge.model";
import {ChallengeService} from "../../services/challenge.service";

@Component({
  selector: 'app-challenge-details',
  templateUrl: './challenge-details.component.html',
  styleUrls: ['./challenge-details.component.css']
})
export class ChallengeDetailsComponent implements OnInit {
  public id: number = 0;
  //@ts-ignore
  public challenge: ChallengeDetails = null
  rawRole: string = '';
  isAdmin = false;
  loggedInUserId = -1;
  maleUsers: UserChallenge[] = []
  femaleUsers: UserChallenge[] = []

  form: any = {
    title: null,
    startDate: null,
    endDate: null,
  };

  constructor(private challengeService: ChallengeService, private tokenService: TokenService, private activatedRoute: ActivatedRoute, private toasts: ToastrService) {

  }

  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.loggedInUserId = this.tokenService.getUser().id;
    this.rawRole = roles[0];
    if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
      this.isAdmin = true;
    }
    this.id = this.activatedRoute.snapshot.params['id'];
    this.load();
  }

  load() {
    this.challengeService.get(this.id).subscribe(data => {
      this.challenge = data;
      this.form.title = this.challenge.title;
      const parts = this.challenge.startDate.split('-');
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year = parseInt(parts[2]);
      const date = new Date(year, month, day, 1, 1);
      this.form.startDate = date.toISOString().substring(0, 10);

      const parts1 = this.challenge.endDate.split('-');
      const day1 = parseInt(parts1[0]);
      const month1 = parseInt(parts1[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year1 = parseInt(parts1[2]);
      const date1 = new Date(year1, month1, day1, 23, 59);
      this.form.endDate = date1.toISOString().substring(0, 10);
      this.maleUsers = this.challenge.users.filter(user => user.male);
      this.femaleUsers = this.challenge.users.filter(user => !user.male);
      this.maleUsers.sort((a, b) => b.distance - a.distance)
      this.femaleUsers.sort((a, b) => b.distance - a.distance)
    });
  }

  sync() {
    this.challengeService.sync(this.id).subscribe(data => {
      this.toasts.success("Sinhronizacija završena")
      this.load();
    });
  }

  onSubmit() {
    this.challengeService.update(this.id, new ChallengeRequest(this.form.title, this.form.startDate, this.form.endDate))
      .subscribe(data => {
        this.load();
        this.toasts.success("Izazov usepšno izmenjen");
      });
  }
}
