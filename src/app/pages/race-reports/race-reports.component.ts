import { Component, OnInit } from '@angular/core';
import {RaceReportDetails, UserRace} from "../../dto/race-details.model";
import { RaceReportService } from "../../services/race-report.service";
import { ToastrService } from "ngx-toastr";
import { TokenService } from "../../services/token.service";

@Component({
  selector: 'app-race-reports',
  templateUrl: './race-reports.component.html',
  styleUrls: ['./race-reports.component.css']
})
export class RaceReportsComponent implements OnInit {
  reports: RaceReportDetails[] = [];
  forDelete = -1;
  rawRole: string = '';
  userId = -1;
  isAdmin = false;

  // Filter values
  fromDate: string | null = null;
  toDate: string | null = null;

  constructor(private reportService: RaceReportService, private toastr: ToastrService, private tokenService: TokenService) {}

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
    this.reportService.getAll(this.fromDate, this.toDate).subscribe(data => {
      this.reports = data;
    });
  }

  applyFilter() {
    this.load();
  }

  resetFilter() {
    this.fromDate = null;
    this.toDate = null;
    this.load();
  }

  delete() {
    this.reportService.delete(this.forDelete).subscribe(() => {
      this.load();
      this.toastr.success("Izveštaj izbrisan");
    });
  }

  markForDelete(id: number) {
    this.forDelete = id;
  }

  canDelete(report: RaceReportDetails) {
    if (this.isAdmin) {
      return true;
    }
    return report.user.id === this.userId;
  }
}
