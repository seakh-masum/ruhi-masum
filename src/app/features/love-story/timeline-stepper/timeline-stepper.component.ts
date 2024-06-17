import { Component } from '@angular/core';
import { TimelineCardComponent } from '../timeline-card/timeline-card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-timeline-stepper',
  standalone: true,
  imports: [TimelineCardComponent, NgClass],
  templateUrl: './timeline-stepper.component.html',
  styleUrl: './timeline-stepper.component.scss'
})
export class TimelineStepperComponent {
  timelineData = [
    {
      title: 'First Meet',
      date: 'Jun 19, 2019',
      desc: 'wonderful serendy has taken Possessonof my entre soul le pray Fem, wonderful serendy has taken Possessonof my entre soul le pray Fem',
      image:
        'https://images.unsplash.com/photo-1592065148456-98a6d7827bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdXBsZSUyMGluJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'First Date',
      date: 'Jun 19, 2019',
      desc: 'wonderful serendy has taken Possessonof my entre soul le pray Fem, wonderful serendy has taken Possessonof my entre soul le pray Fem',
      image:
        'https://images.unsplash.com/photo-1592065148456-98a6d7827bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdXBsZSUyMGluJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Proposal',
      date: 'Jun 19, 2019',
      desc: 'wonderful serendy has taken Possessonof my entre soul le pray Fem, wonderful serendy has taken Possessonof my entre soul le pray Fem',
      image:
        'https://images.unsplash.com/photo-1592065148456-98a6d7827bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdXBsZSUyMGluJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];
}
