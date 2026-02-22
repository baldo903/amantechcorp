import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Tool & Die Making',
      icon: '⚙️',
      description:
        'Intelligent design and fabrication of precision tools, dies, jigs, and fixtures for various applications.',
    },
    {
      id: 2,
      title: 'Metal Fabrication',
      icon: '🏭',
      description:
        'High-quality metal parts manufacturing complying with strict customer specifications and standards.',
    },
    {
      id: 3,
      title: 'Engineering Solutions',
      icon: '🔧',
      description:
        'VA/VE implementation and technical consultation for optimized manufacturing processes.',
    },
  ];
}
