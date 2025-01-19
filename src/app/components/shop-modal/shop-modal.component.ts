import {Component, EventEmitter, Output} from '@angular/core';
import {EventService} from "../../services/event.service";
import {ToastrService} from "ngx-toastr";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-shop-modal',
  templateUrl: './shop-modal.component.html',
  styleUrls: ['./shop-modal.component.css']
})
export class ShopModalComponent {
  @Output() createdEvent = new EventEmitter();
  form: any = {
    title: null,
    availableSizes: null,
    availableGenders: null,
    image: null,
    price: null,
    available: true
  };
  constructor(private shopService: ShopService, private toastr: ToastrService ) {
  }

  onSubmit(): void {

    this.shopService.create(this.form).subscribe(
      data => {
        this.createdEvent.emit();
        this.toastr.success("Uspešno kreiran");
        // @ts-ignore
        document.getElementById('closeChallengeModal').click();
      },
      err => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
