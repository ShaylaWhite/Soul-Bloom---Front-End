import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { SecureComponent } from './secure/secure.component';
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'secure-page', component: SecureComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: 'user-registration' } // Redirect to 'user-registration' only for unknown routes
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
