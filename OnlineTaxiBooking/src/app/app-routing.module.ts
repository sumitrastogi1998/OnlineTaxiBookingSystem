import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegisterEmployeeComponent } from './Components/Admin/register-employee/register-employee.component';
import { CustomerFeedbackComponent } from './Components/Admin/customer-feedback/customer-feedback.component';
import { UsersListComponent } from './Components/Admin/users-list/users-list.component';
import { RegisterTaxiComponent } from './Components/Admin/register-taxi/register-taxi.component';
import { ChangePasswordComponent } from './Components/Admin/change-password/change-password.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { RegisterBookingComponent } from './Components/Customer/register-booking/register-booking.component';
import { RegisterCustomerComponent } from './Components/Customer/register-customer/register-customer.component';
import { SearchDriversComponent } from './Components/Customer/search-drivers/search-drivers.component';
import { DriversListComponent } from './Components/Customer/drivers-list/drivers-list.component';
import { FeedbackComponent } from './Components/Customer/feedback/feedback.component';
import { AuthGuard } from './Guards/auth.guard';
import { CustomerAuthGuard } from './Guards/customer-auth.guard';
import { NotfoundComponent } from './Components/NotFound/notfound/notfound.component';
import { DailyLogsComponent } from './Components/Employee/daily-logs/daily-logs.component';
import { BookingsComponent } from './Components/Employee/bookings/bookings.component';
import { PaymentPageComponent } from './Components/Customer/payment-page/payment-page.component';
import { EmployeeAuthGuard } from './Guards/employee-auth.guard';
import { SelectAvailabilityComponent } from './Components/Employee/select-availability/select-availability.component';
import { BookingHistoryComponent } from './Components/Customer/booking-history/booking-history.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path: 'admin/registerEmployee', component: RegisterEmployeeComponent, canActivate: [AuthGuard]} ,
  {path: 'admin/feedback', component: CustomerFeedbackComponent, canActivate: [AuthGuard]},
  {path: 'admin/userlist', component: UsersListComponent, canActivate: [AuthGuard]},
  {path: 'admin/taxi', component: RegisterTaxiComponent, canActivate: [AuthGuard]},
  {path: 'admin/changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'customer/registerbooking', component: RegisterBookingComponent, canActivate: [CustomerAuthGuard]},
  {path: 'customer/registercustomer', component: RegisterCustomerComponent},
  {path: 'customer/searchDriver', component: SearchDriversComponent, canActivate: [CustomerAuthGuard]} ,
  {path: 'customer/driverlist', component: DriversListComponent, canActivate: [CustomerAuthGuard]},
  {path: 'customer/feedback', component: FeedbackComponent, canActivate: [CustomerAuthGuard]},
   {path: 'customer/payment', component: PaymentPageComponent, canActivate: [CustomerAuthGuard]},
   {path: 'customer/bookingHistory', component: BookingHistoryComponent, canActivate: [CustomerAuthGuard]},
   {path: 'employee/logs', component: DailyLogsComponent, canActivate: [EmployeeAuthGuard]},
  {path: 'employee/booking', component: BookingsComponent, canActivate: [EmployeeAuthGuard]},
  {path: 'employee/available', component: SelectAvailabilityComponent, canActivate: [EmployeeAuthGuard]},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
