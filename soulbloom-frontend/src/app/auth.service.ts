import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flower } from './models/flower.model'; // Adjust the path based on your project structure

@Injectable()
export class AuthService {
  private profileUrl = 'http://localhost:9092/api/users'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  // Modify the function to include the JWT token in the headers
  getUserProfile(userId: number): Observable<any> {
    const token = this.getToken(); // Retrieve the JWT token
    if (!token) {
      // Handle the case where the token is missing or invalid
      return new Observable((observer) => {
        observer.error('JWT token is missing or invalid');
      });
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Include the token in the headers
    });

    // Add headers to the HTTP options
    const options = {
      headers,
    };

    return this.http.get(`${this.profileUrl}/${userId}`, options);
  }

  // Define a method to retrieve the JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
