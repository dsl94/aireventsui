import {Flight} from "./flight.model";

export interface UserDetails {
  id: number;
  userName: string;
  fullName: string;
  email: string;
  stravaId: string;
  roles: string[];
  createdDate: string;
  updatedDate: string;
  membershipUntil: string;
  firstLoginDate: string;
  lastLoginDate: string;

}
