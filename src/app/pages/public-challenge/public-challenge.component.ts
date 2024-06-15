import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "../../services/challenge.service";
import {TokenService} from "../../services/token.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ChallengeDetails, UserChallenge} from "../../dto/challenge.model";

@Component({
  selector: 'app-public-challenge',
  templateUrl: './public-challenge.component.html',
  styleUrls: ['./public-challenge.component.css']
})
export class PublicChallengeComponent implements OnInit {

  challenge: ChallengeDetails | null = null;
  maleUsers: UserChallenge[] = []
  femaleUsers: UserChallenge[] = []

  constructor(private challengeService: ChallengeService) {

  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.challengeService.get(278).subscribe(data => {
      this.challenge = data;
      this.maleUsers = this.challenge.users.filter(user => user.male);
      this.femaleUsers = this.challenge.users.filter(user => !user.male);
      this.maleUsers.sort((a, b) => b.distance - a.distance)
      this.femaleUsers.sort((a, b) => b.distance - a.distance)
    });
  }

  getForUserForMonth(user: UserChallenge, month: String) {
    if (user.perMonth == null) {
      return 0;
    }

    switch (month) {
      case 'Decembar':
        // @ts-ignore
        return user.perMonth['DECEMBER'];
      case 'Januar':
        // @ts-ignore
        return user.perMonth['JANUARY'];
      case 'Februar':
        // @ts-ignore
        return user.perMonth['FEBRUARY'];
      case 'Jun':
        // @ts-ignore
        return user.perMonth['JUNE'];
      case 'Jul':
        // @ts-ignore
        return user.perMonth['JULY'];
      case 'Avgust':
        // @ts-ignore
        return user.perMonth['AUGUST'];
    }
  }
}
