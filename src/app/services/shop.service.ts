import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventDetails, EventRequest} from "../dto/event.model";
import {Item} from "../dto/shop.model";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAll() {
    return this.http.get<Item[]>(this.baseUrl + '/shop/admin/all');
  }

  create(request: any) {
    return this.http.post(this.baseUrl + '/shop', request);
  }
}
