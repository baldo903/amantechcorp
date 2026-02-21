import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductDetail {
  id: number;
  name: string;
  description: string;
  details: string;
  applications: string[];
  icon: string;
  image?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: ProductDetail[] = [
    {
      id: 1,
      name: 'Metal Stamped Parts',
      description:
        'Precision-engineered stamped metal components for automotive, electronics, and industrial applications.',
      details:
        'Using state-of-the-art stamping technology, we produce high-volume stamped parts with consistent quality and tight tolerances.',
      applications: [
        'Automotive body components',
        'Electronic enclosures',
        'HVAC brackets',
        'Appliance parts',
      ],
      icon: '⚙️',
    },
    {
      id: 2,
      name: 'Custom Dies & Tools',
      description:
        'Expertly designed and fabricated dies, molds, and specialized tooling solutions.',
      details:
        'Our tool and die making expertise ensures optimal performance for your production needs with proper VA/VE considerations.',
      applications: ['Stamping dies', 'Progressive dies', 'Metal injection molds', 'Press tooling'],
      icon: '🔨',
    },
    {
      id: 3,
      name: 'Fabricated Metal Assemblies',
      description:
        'Complex metal assemblies and sub-assemblies engineered to exact specifications.',
      details:
        'We combine multiple manufacturing processes including welding, machining, and assembly for complete solutions.',
      applications: [
        'Vehicle sub-assemblies',
        'Industrial equipment frames',
        'Structural components',
        'Custom assemblies',
      ],
      icon: '🏭',
    },
    {
      id: 4,
      name: 'Steel Tubing & Profiles',
      description:
        'High-quality formed and finished metal profiles for construction and manufacturing.',
      details:
        'Precision bending and forming services for steel tubing and structural profiles to your specifications.',
      applications: [
        'Automotive frames',
        'Construction materials',
        'Furniture components',
        'Equipment structures',
      ],
      icon: '📦',
    },
  ];
}
