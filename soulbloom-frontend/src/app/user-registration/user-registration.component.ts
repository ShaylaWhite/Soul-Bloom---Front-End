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
  userData: any;

  constructor(private apiService: ApiService, private router: Router) {}

  registerUser() {
    // Log the user data to the console
    console.log('Register button clicked. User Data:', this.user);

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
    console.log('Registration successful. Response:', response);

    if (response && response.id) {
      this.loginUser(this.userData, response.id);
    } else {
      console.error('Invalid user ID received.');
    }
  }
  
  private loginUser(userData: any, userId: number) {
    console.log('Logging in user with ID:', userId);
    this.apiService.loginUser(userData).subscribe(
      (response: any) => {
        if (response && response.jwt) {
          localStorage.setItem('jwtToken', response.jwt);

          // Navigate to the user profile with the user ID
          this.router.navigate(['/user-profile', userId]); // Navigate to the user's profile with the specified user ID
        }
      },
      (error: any) => {
        if (error.status === 401) {
          this.registrationError = 'Authentication failed. Please check your credentials.';
        }
      }
    );
  }
  
  private handleRegistrationError(error: any) {
    console.log('Registration error:', error);
    if (error.status === 401) {
      this.registrationError = 'Registration failed. Please check your data.';
    } else {
      alert('Registration failed. Please check your data');
    }
  }
}


