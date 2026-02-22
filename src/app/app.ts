import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HistoryComponent } from './components/history/history.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    HistoryComponent,
    ServicesComponent,
    FeaturedProductsComponent,
    TestimonialsComponent,
    CallToActionComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'amantech-website';
}
