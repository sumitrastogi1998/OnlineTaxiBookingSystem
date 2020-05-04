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
  constructor(private authService: AuthService, public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.fetchBookings(this.customerService.customer.Email,this.customerService.customer.CustomerPassword)
    .subscribe(res=>{
      this.customerBooking = JSON.parse(JSON.stringify(res))
      for (let index = 0; index < this.customerBooking.length; index++) {
        //alert(JSON.stringify(this.customerBooking[index]))
        const element = this.customerBooking[index].FromDate;
        const newDate = new Date()
        //alert(element)
        if(element<=newDate){
          this.todayDate[index].isTrue = false;
          this.todayDate.push({isTrue: false})
        }
        else{
          this.todayDate.push({isTrue: true})
        } 
        alert(this.todayDate.length)
        //alert(this.customerBooking[index].FromDate)
      }
  })
  alert(this.todayDate)
}

cancelBooking(bookingId: number){
  this.customerService.cancelBooking(bookingId).subscribe(res=>{
    JSON.stringify(res);
  })
}
}
