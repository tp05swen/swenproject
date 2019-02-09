import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import { BookingService } from '../booking.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpModule} from '@angular/http';


@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.css']
})
export class ManageaccountComponent implements OnInit {

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
  {

  alert("Your account changes has been saved.")
  
}
}
}