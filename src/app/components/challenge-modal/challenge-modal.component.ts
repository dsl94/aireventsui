import {Component, EventEmitter, Output} from '@angular/core';
import {RaceService} from "../../services/race.service";
import {ToastrService} from "ngx-toastr";
import {ChallengeService} from "../../services/challenge.service";

@Component({
  selector: 'app-challenge-modal',
  templateUrl: './challenge-modal.component.html',
  styleUrls: ['./challenge-modal.component.css']
})
export class ChallengeModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    title: null,
    startDate: null,
    endDate: null,
  };
  constructor(private challengeService: ChallengeService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.challengeService.create(this.form).subscribe(
      data => {
        this.createdEvent.emit();
        this.toastr.success("Izazov uspešno kreiran");
        // @ts-ignore
        document.getElementById('closeChallengeModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
