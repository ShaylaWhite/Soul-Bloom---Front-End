import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);

      if (userData && (userData.id || userData.username)) {
        // User is authenticated

        // Check if the route requires a specific userId
        if (route.routeConfig && route.routeConfig.path === 'user-profile/:userId') {
          const userId = route.paramMap.get('userId');

          // Check if userId is present
          if (userId) {
            return true;
          }
        } else {
          return true;
        }
      }
    }

    // User is not authenticated or missing userId, redirect to login or another page
    this.router.navigate(['/login']);
    return false;
  }
}
