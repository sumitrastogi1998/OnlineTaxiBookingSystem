import { Injectable } from '@angular/core';
import { User } from '../../Entities/user';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin: boolean = false
  isCustomer: boolean = false
  isEmployee: boolean = false
  isUserLoggedIn: boolean = false;

  empUser: User = {UserID:null, UserName:null, UserPassword: null, UserRole: null}
  constructor(private http: HttpClient,private router: Router) { }

  loginUser(user: User){
    return this.http.get("http://localhost:9207/api/User/Login/"+user.UserName+"/"+user.UserPassword+"/"+user.UserRole)
  }

  logOut(){
    this.isUserLoggedIn = false;
    this.isAdmin = false
  this.isCustomer = false
  this.isEmployee = false
this.router.navigate(['login'])
  }
}
