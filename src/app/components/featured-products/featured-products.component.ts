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
  showAllProducts = false;

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
    {
      id: 5,
      name: 'Precision Machining',
      description: 'High-precision CNC machining services for critical applications.',
      icon: '🎯',
    },
    {
      id: 6,
      name: 'Metal Fabrication',
      description: 'Complete metal fabrication and welding services.',
      icon: '🔗',
    },
    {
      id: 7,
      name: 'Surface Finishing',
      description: 'Advanced surface treatment and finishing solutions.',
      icon: '✨',
    },
    {
      id: 8,
      name: 'Quality Assurance',
      description: 'Comprehensive quality testing and certification services.',
      icon: '✅',
    },
  ];

  onViewAllProducts() {
    this.showAllProducts = !this.showAllProducts;
    if (this.showAllProducts) {
      // Scroll to the all products section after a brief delay to allow rendering
      setTimeout(() => {
        const allProductsSection = document.getElementById('all-products-section');
        if (allProductsSection) {
          allProductsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
}
