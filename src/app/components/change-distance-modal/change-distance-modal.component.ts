import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventService} from "../../services/event.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-change-distance-modal',
  templateUrl: './change-distance-modal.component.html',
  styleUrls: ['./change-distance-modal.component.css']
})
export class ChangeDistanceModalComponent {
  @Output() distanceChanged = new EventEmitter();
  @Input() id: number = 0;
  form: any = {
    distance: null
  };
  constructor(private eventService: EventService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.eventService.changeDistance(this.id, this.form.distance).subscribe(
      data => {
        this.distanceChanged.emit();
        this.toastr.success("Uspešna promena distance");
        // @ts-ignore
        document.getElementById('closeGoModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
