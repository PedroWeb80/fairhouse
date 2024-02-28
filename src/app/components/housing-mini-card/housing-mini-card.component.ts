import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../housing-location';

@Component({
  selector: 'app-housing-mini-card',
  standalone: true,
  imports: [],
  templateUrl: './housing-mini-card.component.html',
  styleUrl: './housing-mini-card.component.css'
})
export class HousingMiniCardComponent {
  @Input() location:HousingLocation | undefined;
}
