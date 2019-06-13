

import { Component } from '@angular/core';
import { CitiesInfo} from './MockedDataPS5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PS5';
  citiesinfo = CitiesInfo;

}
