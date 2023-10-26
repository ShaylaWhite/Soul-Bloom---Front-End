import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SecureComponent } from './secure/secure.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    UserProfileComponent,
    SecureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

