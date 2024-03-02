import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HousingLocation } from '../housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  environment = environment;
  url = 'http://localhost:3000/locations';

  constructor() { }

  housingList: HousingLocation[] = [
    {
      id: 1,
      name: 'águas claras',
      city: 'olinda',
      state: 'pernambuco',
      photo: `${this.environment.baseUrl}/assets/photo1.jpg`,
      avaliableUnits: 4,
      laundry: true,
      wifi: true,
    },
    {
      id: 2,
      name: 'Lua certão',
      city: 'olinda',
      state: 'pernambuco',
      photo: `${this.environment.baseUrl}/assets/photo2.jpg`,
      avaliableUnits: 3,
      laundry: false,
      wifi: true,
    },
    {
      id: 3,
      name: 'luz vernelha',
      city: 'recife',
      state: 'pernambuco',
      photo: `${this.environment.baseUrl}/assets/photo3.jpg`,
      avaliableUnits: 1,
      laundry: true,
      wifi: false,
    },
    {
      id: 4,
      name: 'jardim verde',
      city: 'céara',
      state: 'pernambuco',
      photo: `${this.environment.baseUrl}/assets/photo4.jpg`,
      avaliableUnits: 4,
      laundry: true,
      wifi: true,
    },
  ];

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined>  {
    const data = await fetch(`${this.url}/${id}`); 
    return data.json() ?? {};
  }

  async getAllHousingLocation(): Promise<HousingLocation[]> {
     const data = await fetch(this.url)
     return await data.json()
  }

  submitApplication(firstName: string, lastName: string,email: string): void {
    console.log(`Nome completo: ${firstName} ${lastName} Email:${email}`)
  }
}
