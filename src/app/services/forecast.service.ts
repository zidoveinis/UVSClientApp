

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../models/forecast';

@Injectable({ providedIn: 'root' })
export class ForecastService {

    constructor(private httpClient: HttpClient) { }

    getWeatherForecast() {
        return this.httpClient.get<Forecast[]>('https://localhost:44313/api/weatherforecast');
    }   
}