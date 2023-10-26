import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9092/api/users'; // Define the base URL

  constructor(private http: HttpClient) { }

  // URL for user registration from backend
  private registrationUrl = 'http://localhost:9092/auth/users/register';

  // URL for user login from backend
  private loginUrl = 'http://localhost:9092/auth/users/login';

  // URL for creating a garden
  private createGardenUrl = `${this.baseUrl}/create-garden`;

  // URL for getting saved gardens
  private getSavedGardensUrl = `${this.baseUrl}/gardens/1`; // Adjust the URL as needed

  // URL for watering a garden
  private waterGardenUrl = `${this.baseUrl}/water-garden/1`; // Adjust the URL as needed

  // URL for adding a flower to the garden
  private addFlowerUrl = `${this.baseUrl}/add-flower`;

  // URL for updating a garden
  private updateGardenUrl = `${this.baseUrl}/gardens/1`; // Adjust the URL as needed

  // URL for deleting a garden
  private deleteGardenUrl = `${this.baseUrl}/gardens/1`; // Adjust the URL as needed


// Register a new user
registerUser(userData: any): Observable<any> {
  return this.http.post(this.registrationUrl, userData);
}

// Login an existing user
loginUser(userData: any): Observable<any> {
  return this.http.post(this.loginUrl, userData);
}
  createGarden(gardenData: any): Observable<any> {
    return this.http.post(this.createGardenUrl, gardenData);
  }

  getSavedGardens(): Observable<any> {
    return this.http.get(this.getSavedGardensUrl);
  }

  waterGarden(gardenId: number): Observable<any> {
    const url = `${this.waterGardenUrl}/${gardenId}`;
    return this.http.put(url, null);
  }

  addFlower(flowerData: any): Observable<any> {
    return this.http.post(this.addFlowerUrl, flowerData);
  }

  updateGarden(gardenData: any): Observable<any> {
    return this.http.put(this.updateGardenUrl, gardenData);
  }

  deleteGarden(gardenId: number): Observable<any> {
    const url = `${this.deleteGardenUrl}/${gardenId}`;
    return this.http.delete(url);
  }
  validateToken(token: string): Observable<any> {
    // Implement the logic to validate the token
    const url = `${this.baseUrl}/validate-token`;
    return this.http.post(url, { token });
  }
  
}
