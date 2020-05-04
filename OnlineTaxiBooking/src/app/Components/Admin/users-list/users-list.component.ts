import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../Services/Admin/admin.service';
import { User } from '../../../Entities/user';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[]
  constructor(public adminService:AdminService, private router: Router) { 

  }

  ngOnInit(): void {
    this.adminService.userList().subscribe((res)=>{
      this.users = JSON.parse(JSON.stringify(res))
    })
  }

  changePassword(value1,value2,value3,value4){
    this.adminService.changePass.UserID = value1;
    this.adminService.changePass.UserName =value2;
    this.adminService.changePass.Password =value3;
    this.adminService.user.UserRole = value4
    this.router.navigate(['admin/changepassword'])
  }

}
