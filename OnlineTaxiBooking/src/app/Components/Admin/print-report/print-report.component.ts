import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../Services/Admin/admin.service';
import { Employee } from '../../../Entities/employee';
import { Taxi } from '../../../Entities/taxi';
import { EmployeeRoster } from '../../../Entities/employee-roster';
import { Customer } from '../../../Entities/customer';
import { Booking } from '../../../Entities/booking';

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.component.html',
  styleUrls: ['./print-report.component.css']
})
export class PrintReportComponent implements OnInit {

  employeeReport: Employee[] = []
  taxiReport: Taxi[] = []
  employeeRosterReport: EmployeeRoster[] = []
  customerReport: Customer[] = []
  bookingReport: Booking[] = []

  reportOf: string = ''

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  savePDF(){
    alert("PDF saved successfully")
  }

  getReports(report){
    //alert(report)
    if(this.reportOf == 'Employee')
    {
    this.adminService.getReportOfEmployee().subscribe(res=>{
      this.employeeReport = JSON.parse(JSON.stringify(res))
    },err=>{
      alert(JSON.stringify(err))
    })
  }
  else if(this.reportOf == 'Customer'){
    this.adminService.getReportOfCustomer().subscribe(res=>{
      this.customerReport = JSON.parse(JSON.stringify(res))
    },err=>{
      alert(JSON.stringify(err))
    })
  }
  else if(this.reportOf == 'EmployeeRosters'){
    this.adminService.getReportOfEmployeeRoster().subscribe(res=>{
      this.employeeRosterReport = JSON.parse(JSON.stringify(res))
    },err=>{
      alert(JSON.stringify(err))
    })
  }
  else if(this.reportOf == 'Taxi'){
    this.adminService.getReportOfTaxi().subscribe(res=>{
      this.taxiReport = JSON.parse(JSON.stringify(res))
    },err=>{
      alert(JSON.stringify(err))
    })
  }
  else if(this.reportOf == 'Bookings'){
    this.adminService.getReportOfBooking().subscribe(res=>{
      this.bookingReport = JSON.parse(JSON.stringify(res))
    },err=>{
      alert(JSON.stringify(err))
    })
  }
  else{
    this.reportOf = ''
  }
  }
}
