import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventDetails, EventRequest} from "../dto/event.model";
import {Item, Order} from "../dto/shop.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll() {
    return this.http.get<Order[]>(this.baseUrl + '/order');
  }

  create(request: any) {
    return this.http.post(this.baseUrl + '/order', request);
  }

  update(id: any, status: any) {
    return this.http.put(this.baseUrl + '/order/' + id + '/'+  status, {});
  }
}
