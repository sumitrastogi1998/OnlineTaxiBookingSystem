import { Injectable } from '@angular/core';
import { Customer } from '../../Entities/customer';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { User } from '../../Entities/user';
import { Booking } from '../../Entities/booking';
import { Employee } from '../../Entities/employee';
import { EmployeeTaxi } from '../../Entities/employee-taxi';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer = {CustomerID: null,CustomerName: null, CustomerPassword: null, MobileNumber:null,Email:null}
  bookingData: Booking = { BookingID: null, FromDate: null, ToDate: null, BookTime: null, DropTime: null, PickupPoint: '', DropPoint: '', employeeId: null, customerId: null, Feedback: null,Fare: null }
  fare: number
  employee: Employee[]
  user: User = {UserID:null,UserName:null, UserPassword: null, UserRole: null}
  empTaxi: EmployeeTaxi = {EmployeeID: null,EmployeeName: null,MobileNumber: null,City: null,Email: null,LicenseNumber: null,Password: null,Available: true,TaxiID: null,TaxiModel: null,TaxiNumber: null,TaxiOwnerId:null}
  
  
  constructor(private http: HttpClient) { }

  calculateFare(Source: string, Destination: string){
    if(Source=="Jaipur" && Destination=="Jodhpur"){
      this.fare = 4000
      return this.fare
    }
    if(Source=="Jaipur" && Destination=="Udaipur"){
      this.fare = 4000
      return this.fare
    }
    if(Source=="Jaipur" && Destination=="Kota"){
      this.fare = 4000
      return this.fare
    }
    if(Source=="Jaipur" && Destination=="Bikaner"){
      this.fare = 4000
      return this.fare
    }
  }

  cancelBooking(id: number){
    return this.http.delete("http://localhost:9207/api/Booking/CancelBooking?id=" + id)
  }
  sendFeedback(customerid: number){
    return this.http.get("http://localhost:9207/api/Booking/SendFeedback/"+customerid+"/"+this.bookingData.Feedback)
  }

  BookTaxi(booking: Booking){
    alert(JSON.stringify(booking))
    return this.http.post("http://localhost:9207/api/Booking",booking)
  }

  fetchCustomer(userName: string, password:string){
    return this.http.get("http://localhost:9207/api/Customer/GetCustomer/"+userName+"/"+password)
  }
  searchDriver(){
    alert(this.bookingData.PickupPoint)
    return this.http.get("http://localhost:9207/api/Employee/SearchEmployees/"+this.bookingData.PickupPoint)
  }

  disableEmployee(empId: number){
    return this.http.get("http://localhost:9207/api/Employee/updateEmployee/"+empId);
  }
  registerCustomer(customer: Customer){
    alert(customer)
    return this.http.post("http://localhost:9207/api/Customer", customer)
  }

  registerUser(customer: Customer){
    alert(customer)
    this.user.UserName = customer.Email
    this.user.UserPassword = customer.CustomerPassword
    this.user.UserRole = "Customer"
    return this.http.post("http://localhost:9207/api/User",this.user)
  }

  fetchBookings(userName:string, pass: string){
    alert(userName)
    return this.http.get("http://localhost:9207/api/Booking/GetCustomerBookings/"+userName+"/"+pass);
  }
}
