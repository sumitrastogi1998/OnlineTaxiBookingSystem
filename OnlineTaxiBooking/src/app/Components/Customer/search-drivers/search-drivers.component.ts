import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/Customer/customer.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search-drivers',
  templateUrl: './search-drivers.component.html',
  styleUrls: ['./search-drivers.component.css']
})
export class SearchDriversComponent implements OnInit {

  constructor(public customerService: CustomerService, private router: Router) { 
    this.minDate = new Date();
  }

  minDate: Date;
  
  ngOnInit(): void {
  }

  searchDriver(search){
    //alert(JSON.stringify(search))
    this.customerService.searchDriver().subscribe(res=>{
      //JSON.stringify(res)
      this.customerService.empTaxi = JSON.parse(JSON.stringify(res))
      //alert(this.customerService.empTaxi)
      this.router.navigate(['customer/driverlist'])
    }, (err)=>{
      alert(JSON.stringify(err))
    })
  }

}
