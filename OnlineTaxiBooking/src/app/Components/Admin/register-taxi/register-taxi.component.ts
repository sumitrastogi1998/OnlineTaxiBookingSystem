import { Component, OnInit } from '@angular/core';
import { Taxi } from '../../../Entities/taxi';
import { AdminService } from '../../../Services/Admin/admin.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-taxi',
  templateUrl: './register-taxi.component.html',
  styleUrls: ['./register-taxi.component.css']
})
export class RegisterTaxiComponent implements OnInit {


  constructor(public adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  reset(empreset: NgForm) {
    empreset.reset();
  }
  registerTaxi(registerForm) {
    this.adminService.taxiRegister(registerForm.value).subscribe((res) => {
      //alert(JSON.stringify(res))
      alert("Taxi Registered Successfully")
      this.adminService.userRegister(this.adminService.user).subscribe((res) => {
        //alert(JSON.stringify(res))
        this.router.navigate(['admin/userlist'])
      }, (err) => {
        alert(JSON.stringify(err))
      })
        , (err) => {
          alert(JSON.stringify(err))
        }
    })
  }
}
