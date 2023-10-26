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
    email: '',
    password: ''
  };
  registrationError: string | undefined;

  constructor(private apiService: ApiService, private router: Router) {}

  registerUser() {
    console.log('Register user function called.'); // Add this line
    const userData = this.user; // Capture the user data
    console.log('User Data:', userData); // Log the user data

    

    if (!this.user.password) {
      // Password is empty, show an error or prevent form submission
      this.registrationError = 'Password cannot be empty';
    } else {
      // Password is not empty, proceed with registration
      const userData = this.user;
      this.apiService.registerUser(userData).subscribe(
        (response: any) => {
          // Handle successful registration
          console.log('Registration successful:', response);
  // Navigate to the user profile component
  this.router.navigate(['/user-profile']);
        },
        (error: any) => {
          // Handle registration errors
          this.handleRegistrationError(error);
          return false;
        }
      );
    }
  }
  
  

  private handleRegistrationSuccess(response: any) {
    console.log('Registration successful:', response);
    // Navigate to the user profile component
    this.router.navigate(['/user-profile']);
  }

  private handleRegistrationError(error: any) {
    console.error('Registration error:', error);

    if (error.status === 401) {
      this.registrationError = 'Registration failed. Please check your data.';
    }
  }
}
