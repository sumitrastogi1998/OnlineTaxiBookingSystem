import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../Entities/employee';
import { Router } from '../../../../../node_modules/@angular/router';
import { AdminService } from '../../../Services/Admin/admin.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {


  constructor(private router: Router, public adminService: AdminService) { }

  ngOnInit(): void {
  }
  reset(empreset: NgForm) {
    empreset.reset();
  }
  employeeCheck: Employee
  registerEmployee(emp: NgForm) {
    this.adminService.employee.Password = this.adminService.getUniqueId(4)
    this.adminService.employeeRegister(this.adminService.employee).subscribe(res => {
      alert("Employee Registered Successfully")
      this.employeeCheck = JSON.parse(JSON.stringify(res))
      //alert(JSON.stringify(res))
      this.adminService.taxi.TaxiOwnerId = this.employeeCheck.EmployeeID
      //alert(this.employeeCheck.EmployeeID)
    },
      (err) => {
        alert(JSON.stringify(err))
      })
    this.router.navigate(['admin/taxi'])
  }

}
