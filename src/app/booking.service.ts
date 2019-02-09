import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient  ) { }

  bookRoom(fromdate: string, enddate: string, roomtype: string, userid : string, special: string) {
    return this.http.get('/api/bookroom/' + fromdate + "/" + enddate + "/" + roomtype + "/" + userid + "/" + special)
  }

  retrieveBookings(userid : string) {
    return this.http.get('/api/retrievebookings/' + userid)
  }

  deleteBooking(bookingid : string) {
    return this.http.get('/api/deletebooking/' + bookingid);
  }
  
  updateBooking(bookingid : string, fromdate: string, enddate: string, roomtype :string, special: string) {
    return this.http.get('/api/updatebooking/' + bookingid + "/" + fromdate + "/" + enddate + "/" + roomtype + "/" + special);
  }
  
  getAllBookings(){
  return this.http.get('/api/getallbookings');
  }
}
