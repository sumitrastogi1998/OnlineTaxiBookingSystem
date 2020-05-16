import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../Entities/booking';
import { Router } from '../../../../../node_modules/@angular/router';
import { AdminService } from '../../../Services/Admin/admin.service';
import { CustomerService } from '../../../Services/Customer/customer.service';

@Component({
  selector: 'app-register-booking',
  templateUrl: './register-booking.component.html',
  styleUrls: ['./register-booking.component.css']
})
export class RegisterBookingComponent implements OnInit {
  BookingData: Booking = { BookingID: null, FromDate: null, ToDate: null, BookTime: null, DropTime: null, PickupPoint: '', DropPoint: '', employeeId: null, customerId: null, Feedback: null,Fare: null }
  minDate: Date;
  minToDate: Date;
  constructor(private router: Router, public adminService: AdminService, public customerService: CustomerService) {
    this.minDate = new Date()
    
   }

  
  ngOnInit(): void {
    this.minToDate = this.customerService.bookingData.FromDate;
  }
  BookTaxi(registerForm) {
    this.customerService.bookingData.Fare  = this.customerService.calculateFare(this.customerService.bookingData.PickupPoint, this.customerService.bookingData.DropPoint)
    //alert(this.customerService.bookingData.Fare)
    this.router.navigate(['customer/payment'])
  }
}

