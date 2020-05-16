import { Component, OnInit } from '@angular/core';
import { EmployeeRoster } from '../../../Entities/employee-roster';
import { AdminService } from '../../../Services/Admin/admin.service';

@Component({
  selector: 'app-employee-roster',
  templateUrl: './employee-roster.component.html',
  styleUrls: ['./employee-roster.component.css']
})
export class EmployeeRosterComponent implements OnInit {

  empRosters: EmployeeRoster[]
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllEmployeeRoster().subscribe(res=>{
      this.empRosters = JSON.parse(JSON.stringify(res))
      //alert(JSON.stringify(res))
    },res=>{
      alert(JSON.stringify(res))
    })
  }

}
