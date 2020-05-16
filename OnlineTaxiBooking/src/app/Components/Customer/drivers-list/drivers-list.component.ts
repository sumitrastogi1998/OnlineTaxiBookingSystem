import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/Customer/customer.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor(public customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }
  fetchData(empID){
    this.customerService.bookingData.customerId = this.customerService.customer.CustomerID;
    this.customerService.bookingData.employeeId = empID;
    //alert(this.customerService.bookingData.customerId+" "+this.customerService.bookingData.employeeId)
    //this.customerService.bookingData.FromDate = this.customerService.
    this.router.navigate(['customer/registerbooking'])
  }

}
