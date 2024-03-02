import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../housing-location';
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './housing-card.component.html',
  styleUrl: './housing-card.component.css'
})
export class HousingCardComponent {
  @Input() location: HousingLocation | undefined;
  
}
