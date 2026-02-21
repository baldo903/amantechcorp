import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href: string;
}

interface ContactInfo {
  label: string;
  value: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks: FooterLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
  ];

  contactInfo: ContactInfo[] = [
    { label: '📞', value: '(02) 514-2189' },
    { label: '📞', value: '(02) 873-4491' },
    { label: '📧', value: 'info@amantechcorp.com' },
    { label: '📍', value: 'Km 16, Republic Steel Tube Compound, Las Piñas City, Philippines' },
  ];
}
