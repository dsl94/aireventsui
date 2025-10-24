import {Component, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {ActivatedRoute} from "@angular/router";

interface PublicEventParticipant {
  id: number;
  eventId: number;
  name: string;
  distance: number;
  paid: boolean;
}

@Component({
  selector: 'app-public-event',
  templateUrl: './public-event.component.html',
  styleUrls: ['./public-event.component.css']
})
export class PublicEventComponent implements OnInit {

  participants: PublicEventParticipant[] = [];
  eventId = 881;
  loading = true;
  error = false;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');
    if (paramId) {
      this.eventId = parseInt(paramId);
    }
    this.load();
  }

  load() {
    this.loading = true;
    this.error = false;
    this.eventService.getPublicEvent(this.eventId).subscribe({
      next: (data) => {
        this.participants = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading event data:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}