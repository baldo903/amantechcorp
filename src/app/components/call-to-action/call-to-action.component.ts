import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css',
})
export class CallToActionComponent {
  onGetStarted() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onContactUs() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
