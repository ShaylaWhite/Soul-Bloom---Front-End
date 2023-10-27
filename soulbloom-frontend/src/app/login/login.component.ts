import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {}; // Define a user object
  loginError: string | null = null; // Declare the loginError property

  constructor(private apiService: ApiService, private router: Router) {}

  loginUser() {
    const userData = this.user;
    this.apiService.loginUser(userData).subscribe(
        (response: any) => {
            // Handle successful login
            console.log('Login successful:', response);

            // Store the JWT token securely (e.g., in localStorage)
            localStorage.setItem('jwt', response.jwt);

            // Redirect to user profile upon successful login
            this.router.navigate(['/user-profile']);
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
