export interface ChallengeDetails {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  lastSync: string;
  users: UserChallenge[];
}

export interface UserChallenge {
  id: number;
  name: string;
  distance: number;
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
