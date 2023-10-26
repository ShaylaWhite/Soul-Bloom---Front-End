import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any; // Holds user profile data
  userId: number = 0; // Initialize with a default value, change it to an appropriate default

  showGarden = false;
  gardenId: number | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId']; // Capture the userId from the route
    });
  }

  ngOnInit() {
    // Construct the URL dynamically using this.userId
    const userProfileUrl = `/api/users/${this.userId}`;

    // Make an HTTP request to fetch user profile data
    this.http.get(userProfileUrl).subscribe(
      (userProfileData: any) => {
        this.userProfile = userProfileData;
        console.log('User Profile Data:', userProfileData);
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  // Update your component to use the selectedUserId
selectedUserId: number = 1; // Initialize with a default user, change as needed

navigateToUserProfile(userId: number) {
  this.router.navigate(['/user-profile', userId]);
}

  showGardenComponent() {
    // Create a garden
    this.http.post('http://localhost:9092/api/users/create-garden', { name: 'My Beautiful Garden' })
      .subscribe((response: any) => {
        // Handle the response or perform additional actions
        console.log('Garden created:', response);
        this.gardenId = response.id;

        // Load the garden data
        this.http.get('http://localhost:9092/api/users/gardens/' + this.gardenId)
          .subscribe((gardenData: any) => {
            // Handle garden data and render the garden component
            console.log('Loaded garden data:', gardenData);
            this.showGarden = true;
          });
      });
  }

  waterGarden() {
    this.http.put('http://localhost:9092/api/users/water-garden/' + this.gardenId, {})
      .subscribe((response: any) => {
        // Handle the response or perform additional actions
        console.log('Garden watered:', response);
      });
  }
}
