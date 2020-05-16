import { Injectable } from '@angular/core';
import { User } from '../../Entities/user';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';
import { EmployeeService } from '../Employee/employee.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  isAdmin: boolean = false
  isCustomer: boolean = false
  isEmployee: boolean = false
  isUserLoggedIn: boolean = false;

  empUser: User = { UserID: null, UserName: null, UserPassword: null, UserRole: null }
  constructor(private http: HttpClient, private router: Router, private empService: EmployeeService) { }

  loginUser(user: User) {
    this.empUser.UserRole = user.UserRole
    return this.http.get("http://localhost:9207/api/User/Login/" + user.UserName + "/" + 
      user.UserPassword + "/" + user.UserRole).pipe(
        retry(0),
        catchError(this.handleError)
      );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if(error.status === 0){
        errorMessage = `Error Code: ${error.status}\nMessage: Web Api not connected`;
      }
      else{
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage:  ${error.error}`;
      }
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }
  logOut() {
    this.isUserLoggedIn = false;
    this.isAdmin = false
    this.isCustomer = false
    this.isEmployee = false
    this.router.navigate(['login'])
    //alert(this.empUser.UserRole)
    if (this.empUser.UserRole == "Employee") {
      this.empService.employeeRoster.ToDate = new Date()
      this.empService.employeeRoster.OutTime = this.empService.employeeRoster.ToDate.getHours() + ":" + this.empService.employeeRoster.ToDate.getMinutes() + ":" + this.empService.employeeRoster.ToDate.getSeconds();

      this.postRoster().subscribe(res => {
        alert(JSON.stringify(res))
      },(err)=>{
        alert(err)
      })
    }
  }

  postRoster() {
    //alert(JSON.stringify(this.empService.employeeRoster))
    return this.http.post("http://localhost:9207/api/EmployeeRoster/AddRoster/" + this.empUser.UserName 
    + "/" + this.empUser.UserPassword, this.empService.employeeRoster).pipe(
      retry(0),
      catchError(this.handleError)
    );
  }
}
