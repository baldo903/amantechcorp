import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  };

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      // In a real application, this would send data to a backend API
      // eslint-disable-next-line no-console
      console.log('Form submitted:', this.formData);
      alert('Thank you for your inquiry! We will contact you shortly.');

      // Reset form
      this.formData = {
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      };
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
