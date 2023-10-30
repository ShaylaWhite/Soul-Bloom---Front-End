import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // Import Router

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9092/api/users';


  private registrationUrl = 'http://localhost:9092/auth/users/register';
  private loginUrl = 'http://localhost:9092/auth/users/login';

  private createGardenUrl = `${this.baseUrl}/create-garden`;
    private getSavedGardensUrl = `${this.baseUrl}/gardens/1`;
  private waterGardenUrl = `${this.baseUrl}/water-garden/1`;
  private addFlowerUrl = `${this.baseUrl}/add-flower`;
  private updateGardenUrl = `${this.baseUrl}/gardens/1`;
  private deleteGardenUrl = `${this.baseUrl}/gardens/1`;
  private userProfileUrl = `${this.baseUrl}/profile`;

  constructor(private http: HttpClient, private router: Router) {} // Provide Router in the constructor


  getUserProfile(userId: number): Observable<any> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get(url);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.registrationUrl, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(this.loginUrl, userData);
  }

  createGarden(gardenName: string): Observable<any> {
    return this.http.post(this.createGardenUrl, { name: gardenName });
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
    const url = `${this.baseUrl}/validate-token`;
    return this.http.post(url, { token });
  }

  private getFlowerUrl = `${this.baseUrl}/flowers`;

  getFlower(flowerId: number): Observable<any> {
    const url = `${this.getFlowerUrl}/${flowerId}`;
    return this.http.get(url);
  }

  private updateFlowerUrl = `${this.baseUrl}/flowers`;

  updateFlower(flowerData: any): Observable<any> {
    return this.http.put(this.updateFlowerUrl, flowerData);
  }

  private deleteFlowerUrl = `${this.baseUrl}/flowers`;

  deleteFlower(flowerId: number): Observable<any> {
    const url = `${this.deleteFlowerUrl}/${flowerId}`;
    return this.http.delete(url);
  }

  navigateToUserProfile(userId: number) {
    this.router.navigate(['/user-profile', userId]);
  }
}
