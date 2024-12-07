import {Component, EventEmitter, Output} from '@angular/core';
import {ChallengeService} from "../../services/challenge.service";
import {ToastrService} from "ngx-toastr";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    title: null,
    startDate: null,
  };
  constructor(private eventService: EventService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.eventService.create(this.form).subscribe(
      data => {
        this.createdEvent.emit();
        this.toastr.success("Događaj uspešno kreiran");
        // @ts-ignore
        document.getElementById('closeChallengeModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
