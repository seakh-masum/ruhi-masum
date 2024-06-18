import { Component } from '@angular/core';
import { TimelineStepperComponent } from './timeline-stepper/timeline-stepper.component';

@Component({
  selector: 'app-love-story',
  standalone: true,
  imports: [TimelineStepperComponent],
  templateUrl: './love-story.component.html',
  styleUrl: './love-story.component.scss',
})
export class LoveStoryComponent {
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
