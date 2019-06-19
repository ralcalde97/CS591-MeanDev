import { Component, OnInit } from '@angular/core';
import { WeatherInfo } from '../models/weatherInfoModel';
import { WeatherService } from '../services/weather-service.service';


@Component({
  selector: 'app-weather-info-form',
  templateUrl: './weather-info-form.component.html',
  styleUrls: ['./weather-info-form.component.css']
})
export class WeatherInfoFormComponent implements OnInit {
  weatherinfo: WeatherInfo = null;

  constructor(private weatherServiceClass: WeatherService) { }

  ngOnInit() {
  }

  getWeatherInfo(name: string): void {
    this.weatherServiceClass.getWeatherInfo(name).subscribe(cityWeather => {
      this.weatherinfo = cityWeather;
    });
  }



}
