import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Metal Stamped Parts',
      description: 'Precision-engineered stamped components for various applications.',
      icon: '⚙️',
    },
    {
      id: 2,
      name: 'Custom Dies',
      description: 'Custom-designed dies for high-volume production requirements.',
      icon: '🏭',
    },
    {
      id: 3,
      name: 'Fabricated Assemblies',
      description: 'Complex metal assemblies and sub-assemblies for OEM partners.',
      icon: '🔧',
    },
    {
      id: 4,
      name: 'Special Tools',
      description: 'Specialized tooling solutions for unique manufacturing needs.',
      icon: '🛠️',
    },
  ];

  onViewAllProducts() {
    // Navigate to products page
    window.location.href = '/products';
  }
}
