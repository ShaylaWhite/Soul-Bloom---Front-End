import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flower } from '../models/flower.model'; // Import the Flower type
import { Garden } from '../models/garden.model'; // Adjust the path as needed

interface Activity {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
   // Define your component properties
   @Input() gardenId: number | null;
   gardenName: string = '';
   flowersInGarden: Flower[] = []; // Use the Flower type for the array
   gardenComplaint: string = '';
   firstFlowerAdded: boolean = false;
   flowerId: number;
   flowerData: any;
   flower: any = {
     selfCareType: 'Your Self Care Type',
     description: 'Your Flower Description',
     image: '',
   };

   selfCareActivities: { name: string, emoji: string }[] = [
    { name: 'Yoga', emoji: '🧘' },
    { name: 'Meditation', emoji: '🧘‍♂️' },
    { name: 'Walk', emoji: '🚶' },
    { name: 'Reading', emoji: '📚' },
    { name: 'Cooking', emoji: '🍳' },
    { name: 'Gardening', emoji: '🌷' },
    // Add more activities and their corresponding emojis
  ];
  

  constructor(private http: HttpClient) {
    this.gardenId = null;
    this.flowerId = 0;
    this.flowerData = {
      selfCareType: '',
      description: '',
      user: {
        id: 1
      },
      garden: {
        id: 1
      }
    };
  }

  ngOnInit(): void {
    // Implement your initialization logic here
    if (this.gardenId !== null) {
      this.loadGardenData();
    }
  }

  loadGardenData() {
    if (this.gardenId) {
      this.http
        .get(`http://localhost:9092/api/users/gardens/${this.gardenId}`)
        .subscribe((gardenData: any) => {
          this.gardenName = gardenData.name;
        });
    }
  }

  createGarden(gardenName: string) {
    if (gardenName) {
      this.http
        .post('http://localhost:9092/api/users/create-garden', { name: gardenName })
        .subscribe(
          (response: any) => {
            console.log('Garden created:', response);
            this.gardenId = response.id;
          },
          (error: any) => {
            console.error('Error creating garden:', error);
          }
        );
    }
  }

  waterGarden() {
    if (this.gardenId) {
      this.http
        .put(`http://localhost:9092/api/users/water-garden/${this.gardenId}`, {})
        .subscribe((response: any) => {
          console.log('Garden watered:', response);
        });
    }
  }

  addFlower() {
    const staticImage = 'assets/images/2.png'; // Set the image URL
    const flowerData = {
      selfCareType: this.flower.selfCareType,
      image: staticImage, // Use the static image URL
      description: this.flower.description,
      user: {
        id: 1
      },
      garden: {
        id: 1
      }
    };
  
    this.http.post('http://localhost:9092/api/users/add-flower', flowerData).subscribe((response: any) => {
      console.log('Flower added:', response);
      this.flowersInGarden.push(response.data);
      this.resetForm();
    });
  }
  
  
  resetForm() {
    this.flower = {
      selfCareType: '',
      description: '',
      image: '',
    };
  }

  getGarden(gardenId: number) {
    // Implement your getGarden logic here
    this.http.get<Garden>(`http://localhost:9092/api/users/gardens/${gardenId}`).subscribe((garden: Garden) => {
      console.log('Got garden:', garden);
      // Update your component's data to reflect the garden details and its flowers.
    });
  }

  updateActivity(activity: Activity) {
    // Implement your updateActivity logic here
    this.http.put(`http://localhost:9092/api/users/activities/${activity.id}`, activity).subscribe((response: any) => {
      console.log('Updated activity:', response);
    });
  }

  deleteActivity(activity: Activity) {
    // Implement your deleteActivity logic here
    this.http.delete(`http://localhost:9092/api/users/activities/${activity.id}`).subscribe((response: any) => {
      console.log('Deleted activity:', response);
    });
  }
}
