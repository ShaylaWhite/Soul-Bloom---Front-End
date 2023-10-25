// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9092/auth/users';

  constructor(private http: HttpClient) { }

  getDataFromBackend(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/data`);
  }
}
