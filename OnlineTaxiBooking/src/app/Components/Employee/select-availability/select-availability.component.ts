import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../Services/Employee/employee.service';
import { AuthService } from '../../../Services/Authentication/auth.service';

@Component({
  selector: 'app-select-availability',
  templateUrl: './select-availability.component.html',
  styleUrls: ['./select-availability.component.css']
})
export class SelectAvailabilityComponent implements OnInit {

  isAvailable: string = ""
  constructor(private empService: EmployeeService,private auth: AuthService) { }

  ngOnInit(): void {
  }

  changeAvailability(){
    alert(this.isAvailable+" "+this.auth.empUser.UserName+" "+this.auth.empUser.UserPassword)
    this.empService.changeAvailability(this.isAvailable,this.auth.empUser.UserName,this.auth.empUser.UserPassword).subscribe(res=>{
      alert(JSON.stringify(res))
    })
  }
}
