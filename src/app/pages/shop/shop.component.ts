import {Component, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {ToastrService} from "ngx-toastr";
import {TokenService} from "../../services/token.service";
import {Item, Order} from "../../dto/shop.model";
import {ShopService} from "../../services/shop.service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  isAdmin = false;
  rawRole: string = '';
  items: Item[] = [];
  orders: Order[] = [];
  selectedId = -1;

  constructor(private shopService: ShopService, private orderService: OrderService, private toastr: ToastrService, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    let roles = this.tokenService.getUser().roles;
    this.rawRole = roles[0];
    if (this.rawRole === 'ROLE_SYSTEM_ADMIN') {
      this.isAdmin = true;
    }
    this.load();
  }

  load() {
    this.shopService.getAll().subscribe(data => {
      this.items = data;
      this.orderService.getAll().subscribe(data2 => {
        this.orders = data2;
      });
    });
  }

  loadName(status: string) {
    if (status === 'CREATED') {
      return "Kreirana";
    }
    if (status === 'PROCESSED') {
      return "Obrađuje se";
    }
    if (status === 'REJECTED') {
      return "Stornirana";
    }
    return '';
  }

  selectId(id: number) {
    this.selectedId = id;
  }
}
