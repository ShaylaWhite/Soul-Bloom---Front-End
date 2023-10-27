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
  userId: number; // Declare userId here

  constructor(private apiService: ApiService, private router: Router) {
    this.userId = 0; // or an appropriate default value
  }

  registerUser() {
    console.log('Register user function called.');
    this.userData = this.user;

    if (!this.user.password) {
      this.registrationError = 'Password cannot be empty';
    } else {
      this.apiService.registerUser(this.userData).subscribe(
        (response: any) => {
          this.handleRegistrationSuccess(response);
        },
        (error: any) => {
          this.handleRegistrationError(error);
        }
      );
    }
  }

  private handleRegistrationSuccess(response: any) {
    console.log('Registration successful:', response);
    if (response && response.id) {
      // User registration successful, now login the user
      this.loginUser(this.userData, response.id);
      
      // Navigate to the user profile component
      this.router.navigate([`/user-profile/${response.id}`]); // Assuming the route is set up correctly
    } else {
      console.error('Invalid user ID received.');
    }
  }
  

  private loginUser(userData: any, userId: number) {
    // Send a login request to the backend using the provided user data
    this.apiService.loginUser(userData).subscribe(
      (response: any) => {
        // Handle successful login
        console.log('Login successful:', response);
        if (response && response.jwt) {
          // Store the JWT token in localStorage
          localStorage.setItem('jwtToken', response.jwt);

          // Redirect to the user profile page
          this.router.navigate([`/user-profile/${userId}`, userId]);          console.error('Invalid JWT token received.');
        }
      },
      (error: any) => {
        // Handle login errors
        console.error('Login error:', error);

        if (error.status === 401) {
          this.registrationError = 'Authentication failed. Please check your credentials.';
        }
      }
    );
  }

  private handleRegistrationError(error: any) {
    console.error('Registration error:', error);

    if (error.status === 401) {
      this.registrationError = 'Registration failed. Please check your data.';
    } else {
      // Show an alert to the user
      alert('Registration failed. Please check your data');
    }
  }
}
