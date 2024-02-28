import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HousingLocation } from '../../housing-location'
import { HousingMiniCardComponent } from '../housing-mini-card/housing-mini-card.component';

@Component({
  selector: 'app-housing-list',
  standalone: true,
  imports: [CommonModule, HousingMiniCardComponent],
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.css'
})
export class HousingListComponent {
  @Input() locationList:HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  results: HousingLocation[] = [];
  
  getLocationList(searcText: string){

    if(!searcText) return;

    this.results = this.locationList.filter(
        location => location.city.toLocaleLowerCase().includes(searcText)
      );
  }

  selectedHouseLocation(location: HousingLocation){
    this.selectedLocationEvent.emit(location)
  }
}
