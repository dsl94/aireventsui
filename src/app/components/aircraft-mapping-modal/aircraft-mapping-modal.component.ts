import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AircraftMappingService} from "../../services/aircraft-mapping.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-aircraft-mapping-modal',
  templateUrl: './aircraft-mapping-modal.component.html',
  styleUrls: ['./aircraft-mapping-modal.component.css']
})
export class AircraftMappingModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    simKey: null,
    icao: null
  };
  constructor(private mappingService: AircraftMappingService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    const { simKey, icao } = this.form;

    this.mappingService.createMapping(simKey, icao).subscribe(
      data => {
          this.createdEvent.emit();
          // @ts-ignore
        document.getElementById('closeMappingModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
