import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HousingListComponent } from './components/housing-list/housing-list.component';
import { HousingLocation } from './housing-location';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousingListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fairhouse';
  
  housingList: HousingLocation[] = [
    {
      name: 'águas claras',
      city: 'olinda',
      state: 'pernambuco',
      photo: '../assets/photo1.png',
      avaliableUnits: 4,
      laundry: true,
      wifi: true,
    },
    {
      name: 'Lua certão',
      city: 'olinda',
      state: 'pernambuco',
      photo: '../assets/photo1.png',
      avaliableUnits: 3,
      laundry: false,
      wifi: true,
    },
    {
      name: 'luz vernelha',
      city: 'recife',
      state: 'pernambuco',
      photo: '../assets/photo1.png',
      avaliableUnits: 1,
      laundry: true,
      wifi: false,
    },
    {
      name: 'jardim verde',
      city: 'céara',
      state: 'pernambuco',
      photo: '../assets/photo1.png',
      avaliableUnits: 4,
      laundry: true,
      wifi: true,
    },
  ];

  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation){
    this.selectedLocation = location;
  }
}
