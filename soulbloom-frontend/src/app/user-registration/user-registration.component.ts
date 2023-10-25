// user-registration.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  constructor(private apiService: ApiService) {}

  registerUser() {
    const userData = {
      username: 'johndoe',
      emailAddress: 'jonh@aol.com',
      password: 'password',
    };

    this.apiService.registerUser(userData).subscribe(
      (response) => {
        // Handle successful registration
        console.log('Registration successful:', response);
      },
      (error) => {
        // Handle registration errors
        console.error('Registration error:', error);
      }
    );
  }
}