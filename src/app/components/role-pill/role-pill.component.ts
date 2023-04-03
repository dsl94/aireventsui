import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-role-pill',
  templateUrl: './role-pill.component.html',
  styleUrls: ['./role-pill.component.css']
})
export class RolePillComponent {
  @Input()
  role: string = 'User';

  getClass() {
    if (this.role==='User') {
      return "badge-success me-1";
    } else if (this.role === 'Dispatcher') {
      return "badge-warning me-1"
    } else {
      return "badge-danger me-1"
    }
  }
}
