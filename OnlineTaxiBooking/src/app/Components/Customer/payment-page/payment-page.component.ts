import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/Customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {


  constructor(public customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  Payment() {
    //alert(this.customerService.bookingData.DropPoint)

    this.customerService.BookTaxi(this.customerService.bookingData).subscribe((res) => {
      alert("Well Done!! We have received your Payment\n Booking Successful")
      this.customerService.disableEmployee(this.customerService.bookingData.employeeId).subscribe(res => {
        alert(JSON.stringify(res))
      }, (err) => {
        alert(JSON.stringify(err))
      })
      this.customerService.bookingData.FromDate = null;
      this.customerService.bookingData.ToDate = null;
      this.customerService.bookingData.BookTime = null;
      this.customerService.bookingData.DropTime = null;
      this.customerService.bookingData.PickupPoint = null;
      this.customerService.bookingData.DropPoint = null;
      this.customerService.bookingData.Fare = null;
      this.customerService.bookingData.employeeId = null;
      this.customerService.bookingData.customerId = null;
      this.router.navigate(['customer/feedback'])
    }, (err) => {
      alert(JSON.stringify(err))
    })

  }

}