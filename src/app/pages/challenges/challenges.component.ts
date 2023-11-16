import {Component, OnInit} from '@angular/core';
import {RaceDetails} from "../../dto/race-details.model";
import {RaceService} from "../../services/race.service";
import {ToastrService} from "ngx-toastr";
import {TokenService} from "../../services/token.service";
import {ChallengeService} from "../../services/challenge.service";
import {ChallengeDetails} from "../../dto/challenge.model";

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit{
  challenges: ChallengeDetails[] = []
  forDelete = -1;

  rawRole: string = '';

  userId = -1;

  isAdmin = false;
  hasStrava = false;

  constructor(private challengeService: ChallengeService, private toastr: ToastrService, private tokenService: TokenService) {
    this.hasStrava = tokenService.getUser().hasStrava;
    console.log(tokenService.getUser().hasStrava);
  }
  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.userId = this.tokenService.getUser().id;
    this.rawRole = roles[0];
    if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
      this.isAdmin = true;
    }
    this.load();
  }

  load() {
    this.challengeService.getAll().subscribe(data => {
      this.challenges = data;
    });
  }

  delete() {
    this.challengeService.delete(this.forDelete).subscribe(data => {
      this.load();
      this.toastr.success("Izazov je izbrisan");
    }, error => {
      this.toastr.error("Nije moguće izbrisati izazov na kome su prijavljeni trkači");
    });
  }

  markForDelete(id: number) {
    this.forDelete = id;
  }

  going(id: number) {
    this.challengeService.go(id).subscribe(data => {
      this.load();
      this.toastr.success("Upsešno ste se prijavili za izazov");
    }, error => {
      this.toastr.error("Došlo je greške");
    })
  }

  displayGo(race: ChallengeDetails) {
    let display = true;
    race.users.forEach(user => {
      if (this.userId == user.id) {
        display = false;
      }
    });
    return display;
  }

  notGoing(id: number) {
    this.challengeService.noGo(id).subscribe(data => {
      this.load();
      this.toastr.success("Upsešno ste se odjavili sa izazova");
    }, error => {
      this.toastr.error("Došlo je greške");
    })
  }
}
