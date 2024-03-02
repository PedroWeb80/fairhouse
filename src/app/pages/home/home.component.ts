import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../housing-location';
import { environment } from '../../../environments/environment.development';
import { HousingListComponent } from '../../components/housing-list/housing-list.component';
import { CommonModule } from '@angular/common';
import { HousingCardComponent } from '../../components/housing-card/housing-card.component';
import { HousingService } from '../../services/housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HousingListComponent, CommonModule, HousingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  environment = environment;
  housingLocationList: HousingLocation[] = [];
  selectedLocation: HousingLocation | undefined;
  //injetando service na classe HomeComponent
  service: HousingService = inject(HousingService)

  constructor() { 
    this.service.getAllHousingLocation()
    .then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
    })
  }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
