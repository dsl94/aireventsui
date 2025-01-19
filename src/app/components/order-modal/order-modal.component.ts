import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventService} from "../../services/event.service";
import {ToastrService} from "ngx-toastr";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent {
  @Output() orderChanged = new EventEmitter();
  @Input() id: number = 0;
  form: any = {
    status: null
  };
  constructor(private orderService: OrderService, private toastr: ToastrService ) {
  }

  onSubmit(): void {
    // const { fullName, email, password, stravaId, membershipUntil } = this.form;

    this.orderService.update(this.id, this.form.status).subscribe(
      data => {
        this.orderChanged.emit();
        this.toastr.success("Uspešna promena statusa");
        // @ts-ignore
        document.getElementById('closeGoModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
