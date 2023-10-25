import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user: any = {}; // Define a user object

  constructor(private apiService: ApiService) {}

  registerUser() {
    const userData = this.user; // Use the user object to send data
    this.apiService.registerUser(userData).subscribe(
      (response: any) => {
        // Handle successful registration
        console.log('Registration successful:', response);
      },
      (error: any) => {
        // Handle registration errors
        console.error('Registration error:', error);
      }
    );
  }
}
