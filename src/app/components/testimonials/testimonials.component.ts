import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Amantech's precision and reliability have been instrumental in our production success. Their commitment to quality is unmatched.",
      author: 'Manufacturing Director, Leading Automotive Company',
    },
    {
      id: 2,
      text: 'The VA/VE solutions they provided significantly reduced our manufacturing costs while improving efficiency.',
      author: 'Operations Manager, Industrial Supplier',
    },
    {
      id: 3,
      text: 'Professional team, exceptional products, and outstanding customer service. Amantech is our preferred partner.',
      author: 'Procurement Lead, Heavy Equipment Manufacturer',
    },
  ];
}
