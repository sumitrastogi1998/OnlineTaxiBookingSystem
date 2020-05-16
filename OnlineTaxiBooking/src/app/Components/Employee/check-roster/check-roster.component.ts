import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../Services/Employee/employee.service';
import { AuthService } from '../../../Services/Authentication/auth.service';
import { EmployeeRoster } from '../../../Entities/employee-roster';

@Component({
  selector: 'app-check-roster',
  templateUrl: './check-roster.component.html',
  styleUrls: ['./check-roster.component.css']
})
export class CheckRosterComponent implements OnInit {

  empRosters: EmployeeRoster[]
  constructor(private employeeService: EmployeeService, private auth: AuthService) { }

  ngOnInit(): void {
    this.employeeService.getAllRostersByEmployee(this.auth.empUser.UserName,this.auth.empUser.UserPassword).subscribe(res=>{
      //alert(JSON.stringify(res))
      this.empRosters=JSON.parse(JSON.stringify(res))
    },(err)=>{
      alert(JSON.stringify(err))
    })
  }

}
