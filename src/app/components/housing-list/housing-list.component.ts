import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../housing-location';
import { HousingMiniCardComponent } from '../housing-mini-card/housing-mini-card.component';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-housing-list',
  standalone: true,
  imports: [CommonModule, HousingMiniCardComponent],
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.css',
})
export class HousingListComponent {
  @Input() locationList: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  locationListFiltered: HousingLocation[] = [];
  service = inject(HousingService);

  constructor() {
   this.service.getAllHousingLocation()
    .then(
        (housingLocationList:HousingLocation[]) => {  
          this.locationListFiltered = housingLocationList;
          this.locationList = housingLocationList;
        }
      );
  }

  getLocationList(searcText: string) {
    if (!searcText) {
      this.locationListFiltered = this.locationList;
      return;
    } 

    this.locationList = this.locationListFiltered.filter(
      (location) =>
        location.city.toLocaleLowerCase().includes(searcText) ||
        location.name.toLowerCase().includes(searcText)
    );
  }

  selectedHouseLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
