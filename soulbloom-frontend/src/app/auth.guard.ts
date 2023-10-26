import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated (e.g., check for a valid token or user session).
    const isAuthenticated = this.checkUserAuthentication(); // Implement this function

    if (isAuthenticated) {
      return true; // Allow access to the route.
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }

  private checkUserAuthentication(): boolean {
    // Implement your authentication logic here (e.g., check for a valid token or user session).
    const token = localStorage.getItem('authToken'); // Change this to your actual token storage key

    // Return true if the token exists and is valid, or implement your own logic
    return !!token;
  }
}