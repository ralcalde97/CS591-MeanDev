import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { WeatherInfo } from '../models/weatherInfoModel';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private client: HttpClient) { }

  getWeatherInfo(name: string): Observable<WeatherInfo> {
    const endPoint: string = this.makeEndpoint(name);
    return this.client.get<WeatherInfo>(endPoint);
  }

  private makeEndpoint(name: string) {
    return 'localhost:3000/ps4/' + name;
  }
}
