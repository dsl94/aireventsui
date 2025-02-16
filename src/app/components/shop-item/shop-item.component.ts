import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../dto/shop.model";
import {ShopService} from "../../services/shop.service";
import {OrderService} from "../../services/order.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input()
  item: Item | undefined;
  sizes: string[] = [];
  genders: string[] = []
  selectedGender = '';
  selectedSize = '';
  quantity = 1;

  constructor(private orderService: OrderService, private toastr: ToastrService) {}

  ngOnInit(): void {
    // @ts-ignore
    this.sizes = this.item?.availableSizes.split(",");
    this.selectedSize = this.sizes[0];
    // @ts-ignore
    this.genders = this.item?.availableGenders.split(",");
    this.selectedGender = this.genders[0];
  }

  order() {
    this.orderService.create({
      itemId: this.item?.id,
      quantity: this.quantity,
      selectedGender: this.selectedGender,
      selectedSize: this.selectedSize
    }).subscribe(data => {
      this.toastr.success('Uspešno ste naručili proizvod.');
    }, error => {
      this.toastr.error('Došlo je do greške.');
    });
  }
}
