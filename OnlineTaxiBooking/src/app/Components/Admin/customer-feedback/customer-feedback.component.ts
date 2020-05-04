import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../Services/Admin/admin.service';
import { Booking } from '../../../Entities/booking';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  users: Booking[]
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getFeedbacks().subscribe(res=>{
      this.users = JSON.parse(JSON.stringify(res))
    })
  }

}
