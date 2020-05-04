import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../Entities/employee';
import { Router } from '../../../../../node_modules/@angular/router';
import { AdminService } from '../../../Services/Admin/admin.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  
  constructor(private router: Router, public adminService: AdminService) { }

  ngOnInit(): void {
  }

  registerEmployee(emp){
this.adminService.employee.Password = this.adminService.getUniqueId(4)
this.adminService.employeeRegister(this.adminService.employee).subscribe(res=>{
  alert(JSON.stringify(res))
  
},
(err)=>{
  alert(JSON.stringify(err))
})
this.router.navigate(['admin/taxi'])
  }

}
