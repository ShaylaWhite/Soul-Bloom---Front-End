import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GardenComponent } from './garden/garden.component';
import { SecureComponent } from './secure/secure.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module'; // Import the 'routes' variable

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    UserProfileComponent,
    GardenComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), // Use the 'routes' variable here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

