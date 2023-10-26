import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  showGarden = false;
  gardenId: number | null = null;

  constructor(private http: HttpClient) {}

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
