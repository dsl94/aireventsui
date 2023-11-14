export interface ChallengeDetails {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  lastSync: string;
  users: UserRace[];
}

export interface UserRace {
  id: number;
  name: string;
}

export class ChallengeRequest {
  title: string;
  startDate: string;
  endDate: string;

  constructor(title: string, startDate: string, endDate: string) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
