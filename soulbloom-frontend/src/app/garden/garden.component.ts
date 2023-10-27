import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flower } from '../models/flower.model'; // Adjust the path based on your project structure

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  @Input() gardenId: number | null = null;
  gardenName: string = '';

  showFlower: boolean = false;
  flowerId: number | undefined;
  
  // Declare the flowersInGarden array
  flowersInGarden: Flower[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.gardenId !== null) {
      // Load garden data when the component initializes if gardenId is not null
      this.loadGardenData();

      // Load flowers in the garden
      this.loadFlowersInGarden();
    }
  }

  loadFlowersInGarden() {
    if (this.gardenId) {
      this.http
        .get<Flower[]>('http://localhost:9092/api/garden/flowers/' + this.gardenId)
        .subscribe((flowersData: Flower[]) => {
          this.flowersInGarden = flowersData;
        });
    }
  }

  loadGardenData() {
    if (this.gardenId) {
      this.http
        .get('http://localhost:9092/api/users/gardens/' + this.gardenId)
        .subscribe((gardenData: any) => {
          // Handle garden data
          this.gardenName = gardenData.name;
        });
    }
  }

  createGarden() {
    this.http
      .post('http://localhost:9092/api/users/create-garden', { name: 'My Beautiful Garden' })
      .subscribe((response: any) => {
        // Handle the response or perform additional actions
        console.log('Garden created:', response);
        // Update gardenId if necessary
        this.gardenId = response.id;
      });
  }

  waterGarden() {
    if (this.gardenId) {
      this.http
        .put('http://localhost:9092/api/users/water-garden/' + this.gardenId, {})
        .subscribe((response: any) => {
          // Handle the response or perform additional actions
          console.log('Garden watered:', response);
        });
    }
  }
}
