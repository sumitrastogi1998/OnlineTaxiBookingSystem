import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { Booking } from '../../Entities/booking';
import { Logs } from '../../Entities/logs';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  bookingData: Booking[]
  url = 'http://localhost:9207/api/log';
  constructor(private http: HttpClient) { }

  fetchBookings(userName:string, pass: string){
    return this.http.get("http://localhost:9207/api/Booking/GetBookings/"+userName+"/"+pass);
  }

  changeAvailability(isAvailable: string,userName: string, pass: string){
    alert(isAvailable)
    return this.http.get("http://localhost:9207/api/Employee/UpdateEmployee/"+isAvailable+"/"+userName+"/"+pass)
  }

  getAllEmployee(userName:string, pass:string): Observable<Logs[]> {
    return this.http.get<Logs[]>(this.url + '/DisplayLogs/'+userName+"/"+pass);
  }
  getEmployeeById(employeeId: string): Observable<Logs> {
    return this.http.get<Logs>(this.url + '/GetEmployeeDetailsById/' + employeeId);
  }
  createEmployee(employee: Logs): Observable<Logs> {
    alert(JSON.stringify(employee))
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
