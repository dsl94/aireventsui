import {Component, EventEmitter, Output} from '@angular/core';
import {ChallengeService} from "../../services/challenge.service";
import {ToastrService} from "ngx-toastr";
import {PlanService} from "../../services/plan.service";

@Component({
  selector: 'app-plan-modal',
  templateUrl: './plan-modal.component.html',
  styleUrls: ['./plan-modal.component.css']
})
export class PlanModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    gender: null,
    age: null,
    weight: null,
    longestRun: null,
    avgPace: null,
    targetRace: null,
    goalTime: null,
    runsPerWeek: null,
    weeksToPrepare: null,
    currentWeeklyMileage: null,
  };
  loading = false;

  constructor(private planService: PlanService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    this.loading = true;

    this.planService.create(this.form).subscribe(
      data => {
        this.createdEvent.emit();
        this.toastr.success("Plan uspešno generisan");
        // @ts-ignore
        document.getElementById('closePlanModal').click();
        this.loading = false;
      },
      err => {
        this.toastr.error(err.error.message);
        this.loading = false;
      }
    );
  }

}
