import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/Authentication/auth.service';
import { CustomerService } from '../../../Services/Customer/customer.service';
import { CustomerBooking } from '../../../Entities/customer-booking';
import { CancelBooking } from '../../../Entities/cancel-booking';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  customerBooking: CustomerBooking[]
  todayDate: CancelBooking[]
  objDate: CancelBooking
  constructor(private authService: AuthService, public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.fetchBookings(this.customerService.customer.Email, this.customerService.customer.CustomerPassword)
      .subscribe(res => {
        this.todayDate = []
        this.customerBooking = JSON.parse(JSON.stringify(res))
        //alert(this.customerBooking.length)
        for (let index = this.customerBooking.length-1; index >= 0 ; index--) {
          //alert(JSON.stringify(this.customerBooking[index]))
          const element = new Date(this.customerBooking[index].FromDate);
          const newDate = new Date()
          //alert(element +" Hello "+newDate)
          if (element.getDate() <= newDate.getDate()) {
            this.objDate = {isTrue: false}
            this.todayDate.unshift(this.objDate)
          }
          else {
            this.objDate = {isTrue: true}
            this.todayDate.unshift(this.objDate)
          }
          //alert(this.todayDate.length)
          //alert(this.customerBooking[index].FromDate)
        }
        //alert(JSON.stringify(this.todayDate))
      }, (err) => {
        alert(JSON.stringify(err))
      })
  }

  cancelBooking(bookingId: number) {
    this.customerService.cancelBooking(bookingId).subscribe(res => {
      alert("Booking Canceled")
      alert(JSON.stringify(res));
    },
      (err) => {
        alert(JSON.stringify(err))
      }
    )
  }
}
