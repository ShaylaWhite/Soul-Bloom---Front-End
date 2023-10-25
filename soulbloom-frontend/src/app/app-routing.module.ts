import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// Import CanActivate and Router from '@angular/router'
import { CanActivate, Router } from '@angular/router';

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Implement your authentication logic here.
    // For demonstration purposes, always return true (allow access).
    return true;
  }
}

const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
