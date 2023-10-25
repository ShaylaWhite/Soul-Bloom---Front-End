import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {}; // Define a user object
  loginError: string | null = null; // Declare the loginError property

  constructor(private apiService: ApiService) {}

  loginUser() {
    const userData = this.user; // Use the user object to send data
    this.apiService.loginUser(userData).subscribe(
      (response: any) => {
        // Handle successful login
        console.log('Login successful:', response);
        // You can also perform redirection to another page here upon successful login.
      },
      (error: any) => {
        // Handle login errors
        console.error('Login error:', error);
  
        if (error.status === 401) {
          // Display an error message to the user
          this.loginError = 'Authentication failed. Please check your credentials.';
        }
      }
    );
  }
}