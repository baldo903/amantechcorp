import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  highlights = [
    'Established June 16, 1996 (formerly BES Technical Works and Services Inc.)',
    'Smart, innovative designs with VA/VE in every process',
    'Expert in tool & die making and metal parts manufacturing',
    'Located in Las Piñas, Philippines',
    'Serving diverse industries for nearly 30 years',
  ];

  clients = [
    {
      name: 'Mitsubishi Motors',
      logo: '/assets/images/Mitsubishi_motors.svg',
    },
    {
      name: 'Toyota',
      logo: '/assets/images/Toyota.png',
    },
    {
      name: 'Honda',
      logo: '/assets/images/Honda.png',
    },
    {
      name: 'Kawasaki',
      logo: '/assets/images/Kawasaki.png',
    },
  ];
}
