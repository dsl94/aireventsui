import { Component } from '@angular/core';
import {ChallengeDetails} from "../../dto/challenge.model";
import {ChallengeService} from "../../services/challenge.service";
import {ToastrService} from "ngx-toastr";
import {TokenService} from "../../services/token.service";
import {PlanService} from "../../services/plan.service";

@Component({
  selector: 'app-ai-plan',
  templateUrl: './ai-plan.component.html',
  styleUrls: ['./ai-plan.component.css']
})
export class AiPlanComponent {
  // @ts-ignore
  plan: String = null;
  parsedPlan: any = null;

  constructor(private planService: PlanService, private toastr: ToastrService, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.planService.get().subscribe(data => {
      if (data.plan) {
        this.plan = data.plan;
        this.parsedPlan = JSON.parse(data.plan);
        console.log(this.parsedPlan.plan); // Array of weeks
      }
    });
  }

}
