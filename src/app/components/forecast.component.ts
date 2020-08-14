import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { BaseFormComponent } from './base-form-element';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-forecast-component',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ForecastComponent),
      multi: true
    }]
})

export class ForecastComponent extends BaseFormComponent implements OnInit {

  @Input() forecast: any;
  @Input() cities: any;

  public constructor() {
    super();
  }
  placeholder: string;
  city: string;

  ngOnInit(): void {
    this.placeholder = 'Pasirinkite miestą';
  }
  onChanged(event: any): void {
    this.city = event;
  }
}
