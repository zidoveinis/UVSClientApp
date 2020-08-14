import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RootObject, City } from '../models/cities';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.httpClient.get<RootObject>('https://localhost:44313/api/cities').pipe(
      map(s => s.Cities));
  }
}
