import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../Services/Employee/employee.service';
import { AuthService } from '../../../Services/Authentication/auth.service';
import { CustomerBooking } from '../../../Entities/customer-booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  customerBooking: CustomerBooking[]
  constructor(private employeeService: EmployeeService,private authService: AuthService) { }

  ngOnInit(): void {
    this.employeeService.fetchBookings(this.authService.empUser.UserName,this.authService.empUser.UserPassword).subscribe(res=>{
      this.customerBooking = JSON.parse(JSON.stringify(res))
      //alert(JSON.stringify(this.customerBooking))
    },
  err=>{
    alert(JSON.stringify(err))
  })
  }



}
