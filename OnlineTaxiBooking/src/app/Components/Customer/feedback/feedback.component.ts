import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/Customer/customer.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  SendFeedback(){
    alert(this.customerService.customer.CustomerID)
    this.customerService.sendFeedback(this.customerService.customer.CustomerID).subscribe(res=>{
      alert("We have recorded your feedback..Thankyou for using our services")
      this.router.navigate(['customer/bookingHistory']);
    }, (err)=>{
      alert(JSON.stringify(err))
    })
  }
}
