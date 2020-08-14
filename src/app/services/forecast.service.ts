

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';

@Injectable({ providedIn: 'root' })
export class ForecastService {

    constructor(private httpClient: HttpClient) { }

    getWeatherForecast(city: string): Observable<Forecast[]>  {
        return this.httpClient.get<Forecast[]>('https://localhost:44313/api/weatherforecast?city=' + city);
      }
}
