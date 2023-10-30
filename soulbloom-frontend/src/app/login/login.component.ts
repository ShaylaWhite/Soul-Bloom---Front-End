import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: any = {}; // Adjust the property name to userData
  loginError: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  loginUser() {
    this.apiService.loginUser(this.userData).subscribe(
      (response: any) => {
        // Handle successful login
        console.log('Login successful:', response);
        // Redirect to user profile upon successful login
        this.router.navigate(['/user-profile']);
      },
      (error: any) => {
        // Handle login errors
        console.error('Login error:', error);

        if (error.status === 401) {
          this.loginError = 'Authentication failed. Please check your credentials.';
        }
      }
    );
  }
}
