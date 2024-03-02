import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { environment } from './../environments/environment.development'
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  environment = environment
  title = 'Homes';
  
}
