import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../../housing-location';
import { HousingService } from '../../services/housing.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development'; 
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  service: HousingService = inject(HousingService);
  location:HousingLocation | undefined = undefined;
  environment = environment;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),

  });

  constructor() {
    const housingLocationId = Number(this.router.snapshot.params['id']);
    this.service.getHousingLocationById(housingLocationId)
      .then((location: HousingLocation | undefined) => {
        this.location = location;
      });
  }

  submitApplication() {
    this.service.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ??'',
      this.applyForm.value.email ?? '',
    );
  }
}
