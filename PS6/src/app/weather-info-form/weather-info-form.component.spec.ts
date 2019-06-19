import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoFormComponent } from './weather-info-form.component';

describe('WeatherInfoFormComponent', () => {
  let component: WeatherInfoFormComponent;
  let fixture: ComponentFixture<WeatherInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
