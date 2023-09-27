export interface RaceDetails {
  id: number;
  title: string;
  date: string;
  distances: string;
  users: string[];
}

export class RaceRequest {
  title: string;
  date: string;
  distances: string;

  constructor(title: string, date: string, distances: string) {
    this.title = title;
    this.date = date;
    this.distances = distances;
  }
}
