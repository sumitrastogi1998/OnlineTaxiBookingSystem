import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { Booking } from '../../Entities/booking';
import { Logs } from '../../Entities/logs';
import { Observable } from '../../../../node_modules/rxjs';
import { EmployeeRoster } from '../../Entities/employee-roster';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  bookingData: Booking[]
  employeeRoster: EmployeeRoster ={RosterID: null, FromDate : null, ToDate: null, InTime: null, OutTime:null, employeeId: null}

  url = 'http://localhost:9207/api/log';
  constructor(private http: HttpClient) { }

  getAllRostersByEmployee(userName: string, pass: string){
    return this.http.get("http://localhost:9207/api/EmployeeRoster/GetAllRoster/"+userName+"/"+pass)
  }
  fetchBookings(userName:string, pass: string){
    return this.http.get("http://localhost:9207/api/Booking/GetBookings/"+userName+"/"+pass);
  }

  changeAvailability(isAvailable: string,userName: string, pass: string){
    //alert(isAvailable)
    return this.http.get("http://localhost:9207/api/Employee/UpdateEmployee/"+isAvailable+"/"+userName+"/"+pass)
  }

  getAllEmployee(userName:string, pass:string): Observable<Logs[]> {
    return this.http.get<Logs[]>(this.url + '/DisplayLogs/'+userName+"/"+pass);
  }
  getEmployeeById(employeeId: string): Observable<Logs> {
    return this.http.get<Logs>(this.url + '/GetEmployeeDetailsById/' + employeeId);
  }
  createEmployee(employee: Logs): Observable<Logs> {
    //alert(JSON.stringify(employee))
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Logs>(this.url + '/InsertEmployeeDetails/',
      employee, httpOptions);
  }
  updateEmployee(employee: Logs): Observable<Logs> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Logs>(this.url + '/UpdateEmployeeDetails/',
      employee, httpOptions);
  }
  deleteEmployeeById(employeeid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,
      httpOptions);
  }
}
