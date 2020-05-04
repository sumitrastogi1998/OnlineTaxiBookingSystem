import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/Customer/customer.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
  }
  SendFeedback(){
    this.customerService.sendFeedback(this.customerService.customer.CustomerID).subscribe(res=>{
      alert(JSON.stringify(res))
    })
  }
}
