export interface EventDetails {
  id: number;
  title: string;
  startDate: string;
  active: boolean
  users: UserEvent[];
}

export interface UserEvent {
  id: number;
  eventId: number;
  name: string;
  distance: number;
  paid: boolean;
}

export class EventRequest {
  title: string;
  startDate: string;

  constructor(title: string, startDate: string) {
    this.title = title;
    this.startDate = startDate;
  }
}
