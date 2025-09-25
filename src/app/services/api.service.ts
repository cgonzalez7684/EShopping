import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
  private http = inject(HttpClient)
  private base = environment.apiUrl

  getWeatherForecast() : 

  
}
