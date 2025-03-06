export interface RaceDetails {
  id: number;
  title: string;
  date: string;
  distances: string;
  users: UserRace[];
}

export interface RaceReportDetails {
  id: number;
  title: string;
  date: string;
  distance: string;
  info: string;
  user: UserRace;
  result: string;
}

export interface UserRace {
  id: number;
  name: string;
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

export class RaceReportRequest {
  title: string;
  date: string;
  distance: string;
  result: string;

  info: string

  constructor(title: string, date: string, distance: string, info: string, result: string) {
    this.title = title;
    this.date = date;
    this.distance = distance;
    this.info = info;
    this.result = result;
  }
}
