import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  gardenName: string = '';
  gardenId: number = 1; // Replace with the appropriate garden ID

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load garden data when the component initializes
    this.loadGardenData();
  }

  loadGardenData() {
    this.http
      .get('http://localhost:9092/api/users/gardens/' + this.gardenId)
      .subscribe((gardenData: any) => {
        // Handle garden data
        this.gardenName = gardenData.name;
      });
  }

  waterGarden() {
    this.http
      .put('http://localhost:9092/api/users/water-garden/' + this.gardenId, {})
      .subscribe((response: any) => {
        // Handle the response or perform additional actions
        console.log('Garden watered:', response);
      });
  }
}
