import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import { BookingService } from '../booking.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpModule} from '@angular/http';


/** @title Datepicker with min & max validation */


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {
bookingForm: FormGroup;
  constructor(private fb: FormBuilder, private booking : BookingService, private auth: AuthService, private router: Router ) {}
  ngOnInit() {
  this.bookingForm = this.fb.group({
  fromdate: '',
  enddate: '',
  roomtype: '',
  special: '',
  });
}

onSubmit() {
  if(this.auth.isLoggedIn()){

  
  this.booking.bookRoom(this.bookingForm.value.fromdate, this.bookingForm.value.enddate, this.bookingForm.value.roomtype, this.auth.getUserID(), this.bookingForm.value.special).subscribe();
  alert("Your booking has been submitted successfully.")
  
}
else
{
  this.router.navigateByUrl('/login')
}
}
}
