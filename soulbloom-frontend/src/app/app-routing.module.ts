import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SecureComponent } from './secure/secure.component';
import { GardenComponent } from './garden/garden.component';
const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile/:userId', component: UserProfileComponent },
  { path: 'secure-page', component: SecureComponent }, // Remove canActivate
  { path: 'garden/:gardenId', component: GardenComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
