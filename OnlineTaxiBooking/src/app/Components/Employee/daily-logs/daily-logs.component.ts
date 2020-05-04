import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../Services/Employee/employee.service';
import { FormBuilder } from '../../../../../node_modules/@angular/forms';
import { Observable } from '../../../../../node_modules/rxjs';
import { Logs } from '../../../Entities/logs';
import { AuthService } from '../../../Services/Authentication/auth.service';

@Component({
  selector: 'app-daily-logs',
  templateUrl: './daily-logs.component.html',
  styleUrls: ['./daily-logs.component.css']
})
export class DailyLogsComponent implements OnInit {

  dataSaved = false;
  employeeForm: any;
  allEmployees: Observable<Logs[]>;
  employeeIdUpdate = null;
  message = null;
  minDate: Date;

  constructor(private formbulider: FormBuilder, private employeeService: EmployeeService,private auth:AuthService) {
  this.minDate = new Date();
   }

  ngOnInit(): void {
    this.employeeForm = this.formbulider.group({
      custName: '',
      source: '',
      destination: '',
      fromdate: '',
      todate: '',
      totalfare: '',
      rating: '',
      eId: ''
    });
    this.loadAllEmployees();
  }
  loadAllEmployees() {
    this.allEmployees = this.employeeService.getAllEmployee(this.auth.empUser.UserName, this.auth.empUser.UserPassword);
  }
  onFormSubmit() {
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    this.CreateEmployee(employee);
    this.employeeForm.reset();
  }
  CreateEmployee(employee: Logs) {
    if (this.employeeIdUpdate == null) {
      this.employeeService.createEmployee(employee).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record saved Successfully';
          this.loadAllEmployees();
          this.employeeIdUpdate = null;
          this.employeeForm.reset();
        }
      );
    } else {
      employee.custId = this.employeeIdUpdate;
      this.employeeService.updateEmployee(employee).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Updated Successfully';
        this.loadAllEmployees();
        this.employeeIdUpdate = null;
        this.employeeForm.reset();
      });
    }
  }
  loadEmployeeToEdit(employeeId: string) {
    this.employeeService.getEmployeeById(employeeId).subscribe(employee => {
      this.message = null;
      this.dataSaved = false;
      this.employeeIdUpdate = employee.custId;
      this.employeeForm.controls['custName'].setValue(employee.custName);
      this.employeeForm.controls['source'].setValue(employee.source);
      this.employeeForm.controls['destination'].setValue(employee.destination);
      this.employeeForm.controls['fromdate'].setValue(employee.fromdate);
      this.employeeForm.controls['todate'].setValue(employee.todate);
      this.employeeForm.controls['totalfare'].setValue(employee.totalfare);
      this.employeeForm.controls['rating'].setValue(employee.rating);
      this.employeeForm.controls['eId'].setValue(employee.eId);
    });
  }
  deleteEmployee(employeeId: string) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Deleted Succefully';
        this.loadAllEmployees();
        this.employeeIdUpdate = null;
        this.employeeForm.reset();
      });
    }
  }
}
