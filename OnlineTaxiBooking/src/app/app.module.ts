import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomerFeedbackComponent } from './Components/Admin/customer-feedback/customer-feedback.component';
import { RegisterEmployeeComponent } from './Components/Admin/register-employee/register-employee.component';
import { UsersListComponent } from './Components/Admin/users-list/users-list.component';
import { EmployeeRosterComponent } from './Components/Admin/employee-roster/employee-roster.component';
import { AdminService } from './Services/Admin/admin.service';
import { RegisterTaxiComponent } from './Components/Admin/register-taxi/register-taxi.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ChangePasswordComponent } from './Components/Admin/change-password/change-password.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { RegisterBookingComponent } from './Components/Customer/register-booking/register-booking.component';
import { RegisterCustomerComponent } from './Components/Customer/register-customer/register-customer.component';
import { SearchDriversComponent } from './Components/Customer/search-drivers/search-drivers.component';
import { DriversListComponent } from './Components/Customer/drivers-list/drivers-list.component';
import { FeedbackComponent } from './Components/Customer/feedback/feedback.component';
import { NotfoundComponent } from './Components/NotFound/notfound/notfound.component';
import { DailyLogsComponent } from './Components/Employee/daily-logs/daily-logs.component';
import { BookingsComponent } from './Components/Employee/bookings/bookings.component';
import { PaymentPageComponent } from './Components/Customer/payment-page/payment-page.component';
import { SelectAvailabilityComponent } from './Components/Employee/select-availability/select-availability.component';
import { BookingHistoryComponent } from './Components/Customer/booking-history/booking-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerFeedbackComponent,
    RegisterEmployeeComponent,
    UsersListComponent,
    EmployeeRosterComponent,
    RegisterTaxiComponent,
    ChangePasswordComponent,
    LoginComponent,
    RegisterBookingComponent,
    RegisterCustomerComponent,
    SearchDriversComponent,
    DriversListComponent,
    FeedbackComponent,
    NotfoundComponent,
    DailyLogsComponent,
    BookingsComponent,
    PaymentPageComponent,
    SelectAvailabilityComponent,
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
