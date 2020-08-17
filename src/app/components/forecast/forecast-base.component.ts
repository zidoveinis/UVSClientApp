import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './forecast-base.component.html'
})
export class ForecastBaseComponent implements OnInit {

  title = 'UVSClientApp';
  forecast: any;
  cities: any;

  constructor(
    private apiForecastService: ForecastService,
    private apiCityService: CitiesService) {
  }

  ngOnInit(): void {
    this.apiCityService.getCities().subscribe(data => {
      this.cities = data;
    });
  }
  onSelectedGroupChanged(newgroup): void {
    this.apiForecastService.getWeatherForecast(newgroup).subscribe(data => {
      this.forecast = data;
    });
  }
}
