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

  Payment(){
    alert(this.customerService.bookingData.DropPoint)
    
    this.customerService.BookTaxi(this.customerService.bookingData).subscribe((res) => {
      alert(JSON.stringify(res))
      this.customerService.disableEmployee(this.customerService.bookingData.employeeId).subscribe(res=>{
        alert(JSON.stringify(res))
      })
      this.router.navigate(['customer/feedback'])
    })
    
  }
 
}