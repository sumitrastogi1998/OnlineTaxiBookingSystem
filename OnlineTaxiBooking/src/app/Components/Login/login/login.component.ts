import { Component, OnInit } from '@angular/core';
import { User } from '../../../Entities/user';
import { AuthService } from '../../../Services/Authentication/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { CustomerService } from '../../../Services/Customer/customer.service';
import { EmployeeService } from '../../../Services/Employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: User = { UserID: null, UserName: null, UserPassword: null, UserRole: '' }
  constructor(private auth: AuthService, private router:
    Router, private customerService: CustomerService, private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  loginUser(loginCredentials) {
    //alert(JSON.stringify(loginCredentials))
    this.auth.loginUser(loginCredentials).subscribe(res => {
      alert("Login Success")
      if (this.loginUserData.UserRole == "Customer") {
        this.customerService.customer.Email = this.loginUserData.UserName
        this.customerService.customer.CustomerPassword = this.loginUserData.UserPassword
        this.customerService.fetchCustomer(this.customerService.customer.Email,
          this.customerService.customer.CustomerPassword).subscribe(
            response => {
              //JSON.stringify(response)
              this.customerService.customer = JSON.parse(JSON.stringify(response))
              this.customerService.bookingData.customerId = this.customerService.customer.CustomerID
            },
            error => alert(JSON.stringify(error))
          )
        this.auth.isUserLoggedIn = true;
        this.auth.isCustomer = false
        this.router.navigate(['customer/searchDriver'])
      } else if (this.loginUserData.UserRole == "Employee") {
        this.auth.isUserLoggedIn = true;
        this.auth.isEmployee = true
        this.auth.isCustomer = true;
        this.auth.empUser.UserName = this.loginUserData.UserName
        this.auth.empUser.UserPassword = this.loginUserData.UserPassword
        this.auth.empUser.UserRole = this.loginUserData.UserRole
        this.empService.employeeRoster.FromDate = new Date()
        this.empService.employeeRoster.InTime = this.empService.employeeRoster.FromDate.getHours() + ":" + this.empService.employeeRoster.FromDate.getMinutes() + ":" + this.empService.employeeRoster.FromDate.getSeconds();
        //alert(this.auth.empUser.UserName+" "+this.auth.empUser.UserPassword)
        this.router.navigate(['employee/booking'])
      }
      else {
        this.auth.isAdmin = true
        this.auth.isUserLoggedIn = true;
        this.auth.isCustomer = true;
        this.router.navigate(['admin/userlist'])
      }
    }, err => {
      alert(err)
    })

  }

}
