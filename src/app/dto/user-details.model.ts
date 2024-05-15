import {Flight} from "./flight.model";

export interface UserDetails {
  id: number;
  userName: string;
  fullName: string;
  email: string;
  stravaId: string;
  gender: string;
  phone: string;
  info: string;
  shirtSize: string;
  roles: string[];
  createdDate: string;
  updatedDate: string;
  membershipUntil: string;
  medicalUntil: string;
  firstLoginDate: string;
  lastLoginDate: string;
  stravaLogin: boolean;
}
