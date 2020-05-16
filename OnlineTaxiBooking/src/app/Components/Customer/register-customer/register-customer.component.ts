import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/Customer/customer.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(public customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
  }

  registerCustomer(registerForm){
    this.customerService.registerCustomer(this.customerService.customer).subscribe(res=>{
      //alert(JSON.stringify(res))
      alert("Registered Successfully")
      this.customerService.registerUser(this.customerService.customer).subscribe(res=>{
        alert(JSON.stringify(res))
        this.router.navigate(['login'])
      },err=>{
        alert(JSON.stringify(err))
      })
    },
    (err)=>{
      alert(JSON.stringify(err))
    })
      }
  }

