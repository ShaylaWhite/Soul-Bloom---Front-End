import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // URL for user registration from backend
  private registrationUrl = 'http://localhost:9092/auth/users/register';

  // URL for user login from backend
  private loginUrl = 'http://localhost:9092/auth/users/login';

  // Register a new user
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.registrationUrl, userData);
  }

  // Login an existing user
  loginUser(userData: any): Observable<any> {
    return this.http.post(this.loginUrl, userData);
  }
}
