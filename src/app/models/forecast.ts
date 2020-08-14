export interface Forecast {
  root: Root;
}

export interface Root {
  location: Location;
  current: Current;
  forecast: Forecast;
  alert: string;
}

export interface Current {
  temp_c: string;
  condition: Condition;
  uv: string;
}

export interface Condition {
  text: string;
  icon: string;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: Date;
  date_epoch: string;
  day: Day;
  astro: string;
}

export interface Day {
  maxtemp_c: string;
  mintemp_c: string;
  condition: Condition;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: string;
  lon: string;
  tz_id: string;
  localtime_epoch: string;
  localtime: string;
}
