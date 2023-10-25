// user-registration.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  data: any; // Use the 'any' type for data

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDataFromBackend().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
