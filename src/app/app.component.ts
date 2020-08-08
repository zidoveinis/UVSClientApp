import { Component, OnInit } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { HttpClient } from '@angular/common/http';
import { Forecast } from './models/forecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'UVSClientApp';

  current: any;
  image = "//cdn.weatherapi.com/weather/64x64/day/356.png";

  constructor(http: HttpClient,
    private apiService: ForecastService) {
  }

  ngOnInit() {

    this.apiService.getWeatherForecast().subscribe((data: Forecast[]) =>  {
      console.log(data);
      this.current = data['current'];
    });
  }
}
