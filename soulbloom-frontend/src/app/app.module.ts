import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GardenComponent } from './garden/garden.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    UserProfileComponent,
    GardenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
