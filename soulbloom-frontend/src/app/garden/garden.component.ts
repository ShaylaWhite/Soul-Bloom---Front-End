import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  @Input() gardenId: number | null = null;
  gardenName: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.gardenId !== null) {
      // Load garden data when the component initializes if gardenId is not null
      this.loadGardenData();
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
