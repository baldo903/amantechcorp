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
  milestones = [
    {
      year: '1996',
      title: 'Company Founded',
      description:
        'Established Amantech Corporation on June 16, 1996, building on the foundation of BES Technical Works and Services Inc. Specializing in metal parts manufacturing and tool & die making.',
    },
    {
      year: '2000s',
      title: 'Industry Growth',
      description:
        'Established reputation for smart, innovative designs and Value Analysis/Value Engineering (VA/VE) practices in every manufacturing process.',
    },
    {
      year: '2010s',
      title: 'Expanded Services',
      description:
        'Expanded capabilities to include mould design, jigs and fixtures fabrication, and specialized metal parts manufacturing for diverse industries.',
    },
    {
      year: '2015+',
      title: 'Quality Excellence',
      description:
        'Achieved multiple quality certifications and became a trusted supplier for automotive, construction, furniture manufacturing, and other industries.',
    },
    {
      year: '2020+',
      title: 'Innovation & Modernization',
      description:
        'Continued investment in advanced manufacturing technologies and processes to meet evolving customer needs and industry standards.',
    },
    {
      year: '2026',
      title: 'Future Vision',
      description:
        'Committed to developing, enhancing, and advancing the tool and die making and metal parts manufacturing industry in the Philippines and beyond.',
    },
  ];
}
