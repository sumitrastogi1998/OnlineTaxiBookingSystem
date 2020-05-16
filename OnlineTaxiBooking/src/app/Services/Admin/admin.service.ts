import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../Entities/employee';
import { Taxi } from '../../Entities/taxi';
import { User } from '../../Entities/user';
import { ChangePassword } from '../../Entities/change-password';
import { Booking } from '../../Entities/booking';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  employee: Employee = {EmployeeID: null,EmployeeName: null, MobileNumber: null, City:'',Email:null, LicenseNumber: null, Password: null, Available: true}
  taxi: Taxi = {TaxiID:null,TaxiNumber: null, TaxiModel: null, TaxiOwnerId: null}
  user: User = {UserID:null,UserName: null, UserPassword: null, UserRole: null}
  changePass: ChangePassword = {UserID: null, UserName: null, Password: null, NewPassWord:null, ConfirmPassword: null}
  
  constructor(private http: HttpClient) { }
  
  changeName: string
  changeEmpPass: string

  getReportOfEmployee(){
    return this.http.get("http://localhost:9207/api/Employee/GetAll");
  }

  getReportOfCustomer(){
    return this.http.get("http://localhost:9207/api/Customer/GetCustomerReport");
  }

  getReportOfEmployeeRoster(){
    return this.http.get("http://localhost:9207/api/EmployeeRoster/GetAllRosters");
  }

  getReportOfTaxi(){
    return this.http.get("http://localhost:9207/api/Taxi/GetAllTaxis");
  }

  getReportOfBooking(){
    return this.http.get("http://localhost:9207/api/Booking/GetAllBookings");
  }

  
  getAllEmployeeRoster(){
    return this.http.get("http://localhost:9207/api/EmployeeRoster/GetAllRosters");
  }
  
  changePassWord(change: ChangePassword){
    this.user.UserID=change.UserID
    this.user.UserName = change.UserName
    this.user.UserPassword=change.NewPassWord
    //alert(JSON.stringify(this.user))
      return this.http.put("http://localhost:9207/api/User/"+this.user.UserID,this.user)

  }

  getFeedbacks(){
    return this.http.get("http://localhost:9207/api/Booking/GetAllFeedbacks")
  }

  
  changeEmployeePass(change: ChangePassword){
    //alert(this.user.UserName+" "+this.changeEmpPass+" "+this.user.UserPassword)
    //this.changeName = change.UserName
    //this.changeEmpPass = change.NewPassWord
    return this.http.get("http://localhost:9207/api/Employee/Change/"+this.user.UserName+"/"+this.changeEmpPass+"/"+this.user.UserPassword)
  }

  changeCustomerPass(change: ChangePassword){
    //alert(this.user.UserName+" "+this.changeEmpPass+" "+this.user.UserPassword)
    //this.changeName = change.UserName
    //this.changeEmpPass = change.NewPassWord
    return this.http.get("http://localhost:9207/api/Customer/Change/"+this.user.UserName+"/"+this.changeEmpPass+"/"+this.user.UserPassword)
  }


  employeeRegister(employee: Employee){
    //alert(JSON.stringify(employee))
    return this.http.post("http://localhost:9207/api/Employee",employee)
  }

  taxiRegister(taxi: Taxi){
    //alert(JSON.stringify(taxi)+" "+JSON.stringify(this.employee))
    return this.http.post("http://localhost:9207/api/Taxi",taxi)
  }

  userRegister(user: User){
    user.UserName = this.employee.Email;
    user.UserPassword = this.employee.Password;
    user.UserRole = "Employee"
    return this.http.post("http://localhost:9207/api/User",user)
  }
  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  userList(){
    return this.http.get("http://localhost:9207/api/User/GetAllUsers")
  }
}
