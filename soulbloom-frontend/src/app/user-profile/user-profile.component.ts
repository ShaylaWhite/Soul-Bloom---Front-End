import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  gardenId: number | null = null;
  gardenName: string = '';
  creatingGarden = false;
  gardenNameInvalid = false;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const userId = +params['userId'];

      if (!isNaN(userId)) {
        this.apiService.getUserProfile(userId).subscribe(
          (userProfile: any) => {
            this.userProfile = userProfile;
            console.log('User Profile Data:', userProfile);

            // Check for gardenId here and set it if available
            if (userProfile && userProfile.gardenId) {
              this.gardenId = userProfile.gardenId;
            }
          },
          (error: any) => {
            console.error('Error fetching user profile:', error);
          }
        );
      }
    });
  }

  createGarden() {
    this.creatingGarden = true;
    this.gardenNameInvalid = false;
  
    if (!this.gardenName) {
      this.gardenNameInvalid = true;
      this.creatingGarden = false;
      return;
    }
  
    // Step 1: Create a new garden by sending a POST request
    this.apiService.createGarden(this.gardenName).subscribe(
      (response: any) => {
        // Step 2: Handle the response
        console.log('Garden created:', response);
  
        // Step 3: Update the gardenId with the newly created garden's ID
        this.gardenId = response.data.id;       },
      (error: any) => {
        // Step 4: Handle any errors that occur during the creation
        console.error('Error creating garden:', error);
      }
    );
    }
  }