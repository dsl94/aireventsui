import {Flight} from "./flight.model";
import {Booking} from "./booking.model";

export interface Dashboard {
  name: string;
  icao: string;
  numberOfFlights: number;
  numberOfPilots: number;
  balance: number;
  numberOfPlanes: number;
  lastFiveFlights: Flight[];
  bookings: Booking[];
}
