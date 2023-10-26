import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})


export class UserRegistrationComponent {
  user: any = {
    username: '',
    emailAddress: '',
    password: ''
  };
  registrationError: string | undefined;
  userData: any; // Declare userData as a class property

  constructor(private apiService: ApiService, private router: Router) {}

  registerUser() {
    console.log('Register user function called.'); // Add this line
    this.userData = this.user; // Capture the user data

    if (!this.user.password) {
      // Password is empty, show an error or prevent form submission
      this.registrationError = 'Password cannot be empty';
    } else {
      // Password is not empty, proceed with registration
      this.apiService.registerUser(this.userData).subscribe(
        (response: any) => {
          // Handle successful registration
          this.handleRegistrationSuccess(response);
        },
        (error: any) => {
          // Handle registration errors
          this.handleRegistrationError(error);
        }
      );
    }
  }

  private handleRegistrationSuccess(response: any) {
    console.log('Registration successful:', response);
    if (response && response.id) {
      const userId = response.id; // Use the actual user ID from the response
      this.router.navigate(['/user-profile', userId]);
    } else {
      console.error('Invalid user ID received.');
    }
  }
  

  private handleRegistrationError(error: any) {
    console.error('Registration error:', error);
  
    if (error.status === 401) {
      this.registrationError = 'Registration failed. Please check your data.';
    } else {
      // Show an alert to the user
      alert('Registration failed. Please check your data ');
    }
  }
}
