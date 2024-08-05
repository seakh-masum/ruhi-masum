import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-calender',
  standalone: true,
  imports: [],
  templateUrl: './wedding-calender.component.html',
  styleUrl: './wedding-calender.component.scss',
})
export class WeddingCalenderComponent {
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates: any[] = Array.from(Array(31).keys(), (i) => i + 1);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.dates.unshift(this.weekdays);
    this.dates.unshift('');
    this.dates.unshift('');

    this.dates.push('');
    this.dates.push('');
  }
}
