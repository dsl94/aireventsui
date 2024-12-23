import {Component, OnInit} from '@angular/core';
import {ChallengeDetails, ChallengeRequest, UserChallenge} from "../../dto/challenge.model";
import {ChallengeService} from "../../services/challenge.service";
import {TokenService} from "../../services/token.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {EventDetails, EventRequest} from "../../dto/event.model";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public id: number = 0;
  //@ts-ignore
  public event: EventDetails = null
  rawRole: string = '';
  isAdmin = false;
  loggedInUserId = -1;
  selectedId = -1;

  form: any = {
    title: null,
    startDate: null,
  };

  constructor(private eventService: EventService, private tokenService: TokenService, private activatedRoute: ActivatedRoute, private toasts: ToastrService) {

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
    this.eventService.get(this.id).subscribe(data => {
      this.event = data;
      this.form.title = this.event.title;
      const parts = this.event.startDate.split('-');
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Month is 0-based (0 for January, 1 for February, etc.)
      const year = parseInt(parts[2]);
      const date = new Date(year, month, day, 1, 1);
      this.form.startDate = date.toISOString().substring(0, 10);
    });
  }

  onSubmit() {
    this.eventService.update(this.id, new EventRequest(this.form.title, this.form.startDate))
      .subscribe(data => {
        this.load();
        this.toasts.success("Dogadjaj usepšno izmenjen");
      });
  }

  pay(id: number) {
    this.eventService.pay(id)
      .subscribe(data => {
        this.load();
        this.toasts.success("Potvrđena uplata za korisnika");
      });
  }

  selectId(id: number) {
    this.selectedId = id;
  }
}
