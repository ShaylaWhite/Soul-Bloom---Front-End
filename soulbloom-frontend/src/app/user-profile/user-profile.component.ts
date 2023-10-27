import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  userId: number | undefined;

  showGarden = false;
  gardenId: number | null = null;

  showFlower = false; // Add this flag for the FlowerComponent
  flowerId: number | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId']; // Fetch userId from route parameters
    });

    const userProfileUrl = `http://localhost:9092/api/users/${this.userId}`;

    this.http.get(userProfileUrl).subscribe(
      (userProfileData: any) => {
        this.userProfile = userProfileData;
        console.log('User Profile Data:', userProfileData);

        // Fetching user profile data was successful, so you can now set the flags.
        this.showGarden = true;
        this.showFlower = true;
        this.flowerId = 123; // Replace with a valid flower ID
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
}
