import { Component, OnInit, Input } from '@angular/core';
import {Forecast} from '../models/forecast'

@Component({
  selector: 'forecast-component',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})

export class ForecastComponent implements OnInit {

  @Input() image = {} as Forecast;

    public constructor() {}

    ngOnInit() {}
}
