import {Component, OnInit} from '@angular/core';
import {ChallengeDetails} from "../../dto/challenge.model";
import {ChallengeService} from "../../services/challenge.service";
import {ToastrService} from "ngx-toastr";
import {TokenService} from "../../services/token.service";
import {EventDetails} from "../../dto/event.model";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  events: EventDetails[] = []
  forDelete = -1;
  forGoing = -1;

  rawRole: string = '';

  userId = -1;

  isAdmin = false;
  isGuest = false;

  constructor(private eventService: EventService, private toastr: ToastrService, private tokenService: TokenService) {
  }
  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.userId = this.tokenService.getUser().id;
    this.rawRole = roles[0];
    if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
      this.isAdmin = true;
    }
    if (this.rawRole === 'ROLE_GUEST') {
      this.isGuest = true;
    }
    this.load();
  }

  load() {
    this.eventService.getAll().subscribe(data => {
      this.events = data;
    });
  }

  delete() {
    this.eventService.delete(this.forDelete).subscribe(data => {
      this.load();
      this.toastr.success("Događaj je izbrisan");
    }, error => {
      this.toastr.error("Nije moguće izbrisati događaj na kome su prijavljeni trkači");
    });
  }

  markForDelete(id: number) {
    this.forDelete = id;
  }

  markForGoing(id: number) {

    this.forGoing = id;
    console.log(this.forGoing);
  }

  displayGo(race: EventDetails) {
    console.log(this.userId);
    let display = true;
    race.users.forEach(user => {
      if (this.userId == user.id) {
        display = false;
      }
    });
    if ( !race.active) {
      display = false;
    }
    return display;
  }

  notGoing(id: number) {
    this.eventService.noGo(id).subscribe(data => {
      this.load();
      this.toastr.success("Upsešno ste se odjavili sa događaja");
    }, error => {
      this.toastr.error("Došlo je greške");
    })
  }
}
