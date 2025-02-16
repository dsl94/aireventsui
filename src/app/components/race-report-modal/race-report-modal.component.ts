import {Component, EventEmitter, Output} from '@angular/core';
import {RaceService} from "../../services/race.service";
import {ToastrService} from "ngx-toastr";
import {RaceReportService} from "../../services/race-report.service";

@Component({
  selector: 'app-race-report-modal',
  templateUrl: './race-report-modal.component.html',
  styleUrls: ['./race-report-modal.component.css']
})
export class RaceReportModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    title: null,
    date: null,
    distance: null,
    resultGeneral: "Bez rezultata",
    resultGroup: "Bez rezultata",
  };
  selectedDistance = "-1";
  constructor(private reportService: RaceReportService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    let info = "";
    if (this.form.resultGroup != null) {
      info = "Plasman u svojoj kategoriji: " + this.form.resultGroup;
    }
    if (this.form.resultGeneral != null) {
      info += "\nGeneralni plasman: " + this.form.resultGeneral;
    }
    let data = {
      title: this.form.title,
      date: this.form.date,
      distance: this.form.distance,
      info: info
    }
    this.reportService.create(data).subscribe(
      data => {
        this.createdEvent.emit();
        this.toastr.success("Izveštaj uspešno kreiran");
        // @ts-ignore
        document.getElementById('closeRaceModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }

  changeDistance() {
    if (this.selectedDistance != "-1") {
      console.log(this.selectedDistance)
      switch (this.selectedDistance) {
        case "5":
          this.form.distance = "5";
          console.log("Usao u 5, form distance je: " + this.form.distance)
          break;
        case "10":
          this.form.distance = "10";
          break;
        case "Polumaraton":
          this.form.distance = "Polumaraton";
          break;
        case "Maraton":
          this.form.distance = "Maraton";
          break;
        case "Sprint trijatlon":
          this.form.distance = "Sprint trijatlon";
          break;
        case "Olimpijski trijatlon":
          this.form.distance = "Olimpijski trijatlon";
          break;
        case "Polu ironman distanca":
          this.form.distance = "Polu ironman";
          break;
        case "Ironman distanca":
          this.form.distance = "Ironman";
          break;
        default:
          break;
      }
    }
  }
}
