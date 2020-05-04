import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../Services/Admin/admin.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public adminService:AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  change(changePassword){
    alert(JSON.stringify(changePassword.value))
    this.adminService.changeEmpPass = this.adminService.changePass.Password
    this.adminService.changePassWord(changePassword.value).subscribe(res=>{
      JSON.stringify(res)
      if(this.adminService.user.UserRole == "Employee")
      {
      this.adminService.changeEmployeePass(changePassword.value).subscribe(res=>{
        JSON.stringify(res)
      })
      this.router.navigate(['admin/userlist'])
    }
    else{
      this.adminService.changeCustomerPass(changePassword.value).subscribe(res=>{
        JSON.stringify(res)
      })
      this.router.navigate(['admin/userlist'])
    }
    })
  }

}
