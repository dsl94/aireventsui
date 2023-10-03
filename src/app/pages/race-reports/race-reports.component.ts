import {Component, OnInit} from '@angular/core';
import {RaceDetails, RaceReportDetails} from "../../dto/race-details.model";
import {RaceService} from "../../services/race.service";
import {ToastrService} from "ngx-toastr";
import {TokenService} from "../../services/token.service";
import {RaceReportService} from "../../services/race-report.service";

@Component({
  selector: 'app-race-reports',
  templateUrl: './race-reports.component.html',
  styleUrls: ['./race-reports.component.css']
})
export class RaceReportsComponent implements OnInit {
  reports: RaceReportDetails[] = []
  forDelete = -1;

  rawRole: string = '';

  userId = -1;

  isAdmin = false;

  constructor(private reportService: RaceReportService, private toastr: ToastrService, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.userId = this.tokenService.getUser().id;
    this.rawRole = roles[0];
    if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
      this.isAdmin = true;
    }
    this.load();
  }

  load() {
    this.reportService.getAll().subscribe(data => {
      this.reports = data;
    });
  }

  delete() {
    this.reportService.delete(this.forDelete).subscribe(data => {
      this.load();
      this.toastr.success("Izveštaj izbrisan");
    });
  }

  markForDelete(id: number) {
    this.forDelete = id;
  }
}
