import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {RaceService} from "../../services/race.service";
import {RaceType} from "../../dto/race-type.model";

@Component({
  selector: 'app-race-modal',
  templateUrl: './race-modal.component.html',
  styleUrls: ['./race-modal.component.css']
})
export class RaceModalComponent {
  @Output() createdEvent = new EventEmitter();
  @Input() types: RaceType[] = [];
  form: any = {
    type: null,
    title: null,
    date: null,
    distances: [],
    city: null,
    country: null
  };
  constructor(private raceService: RaceService, private toastr: ToastrService ) {
  }

  onTypeChange() {
    this.form.distances = null; // Reset distances when type changes
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
