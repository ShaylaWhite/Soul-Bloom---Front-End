import { Component, OnInit, Input } from '@angular/core'
import { ApiService } from '../api.service';


@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  @Input() showFlower: boolean | undefined;
  @Input() flowerId: number | undefined; // Declare the @Input properties

  flower: any = {
    selfCareType: '',
    description: '',
    user: {
      id: 1
    },
    garden: {
      id: 1
    }
  };

  flowerImages: any[] = [
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    // Add more images as needed
  ];

  flowerIdToDelete: number = 1; // Set the ID of the flower to delete

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Implement your initialization logic here
  }

  // Method to update a flower
  updateFlower() {
    this.apiService.updateFlower(this.flower).subscribe(
      (response: any) => {
        // Handle successful update
        console.log('Flower updated:', response);
        // You can perform additional actions here
      },
      (error: any) => {
        // Handle update errors
        console.error('Flower update error:', error);
        // You can display an error message to the user
      }
    );
  }

  // Method to delete a flower
  deleteFlower() {
    this.apiService.deleteFlower(this.flowerIdToDelete).subscribe(
      () => {
        // Handle successful deletion
        console.log('Flower deleted');
        // You can perform additional actions here
      },
      (error: any) => {
        // Handle deletion errors
        console.error('Flower deletion error:', error);
        // You can display an error message to the user
      }
    );
  }
}
