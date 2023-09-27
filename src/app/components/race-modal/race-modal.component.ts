import {Component, EventEmitter, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-race-modal',
  templateUrl: './race-modal.component.html',
  styleUrls: ['./race-modal.component.css']
})
export class RaceModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    title: null,
    date: null,
    distances: null,
  };
  constructor(private raceService: RaceService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.raceService.create(this.form).subscribe(
      data => {
        this.createdEvent.emit();
        this.toastr.success("Trka uspešno kreirana");
        // @ts-ignore
        document.getElementById('closeRaceModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
