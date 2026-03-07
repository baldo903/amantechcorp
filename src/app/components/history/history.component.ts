import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  // Company information
  foundedDate = '16th of June, 1996';
  formerName = 'BES Technical Works and Services Inc.';
  yearsOfExperience = '30';
}
