import { Component } from '@angular/core';
import { AdminService } from './Services/Admin/admin.service';
import { AuthService } from './Services/Authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown: boolean = false
  constructor(public authService: AuthService){
    
  }

  title = 'OnlineTaxiBooking';
}
