import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  @Output() confirmEvent = new EventEmitter();
  confirm() {
    this.confirmEvent.emit();
    // @ts-ignore
    document.getElementById('closeConfirmModal').click();
  }
}
