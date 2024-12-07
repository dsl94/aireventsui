import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChallengeService} from "../../services/challenge.service";
import {ToastrService} from "ngx-toastr";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-event-go-modal',
  templateUrl: './event-go-modal.component.html',
  styleUrls: ['./event-go-modal.component.css']
})
export class EventGoModalComponent {
  @Output() goingEvent = new EventEmitter();
  @Input() goingEventId: number = 0;
  form: any = {
    distance: null
  };
  constructor(private eventService: EventService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.eventService.go(this.goingEventId, this.form.distance).subscribe(
      data => {
        this.goingEvent.emit();
        this.toastr.success("Uspešna prijava");
        // @ts-ignore
        document.getElementById('closeGoModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
