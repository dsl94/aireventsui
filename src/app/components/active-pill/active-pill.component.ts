import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-active-pill',
  templateUrl: './active-pill.component.html',
  styleUrls: ['./active-pill.component.css']
})
export class ActivePillComponent {
  @Input()
  active: boolean = true;

  getClass() {
    if (this.active) {
      return "text-success me-1";
    } else {
      return "text-danger me-1"
    }
  }

  getText() {
    if (this.active) {
      return "Yes";
    } else {
      return "No"
    }
  }
}
