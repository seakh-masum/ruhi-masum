import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timeline-card.component.html',
  styleUrl: './timeline-card.component.scss'
})
export class TimelineCardComponent {
  data = input<any>();
  isEven = input<boolean>();
}
