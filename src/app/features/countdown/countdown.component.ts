import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent {
  daysLeft = 0;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.countDays();
  }

  countDays() {
    let today = new Date();
    let weddingDate = new Date('10/15/2024');

    let diff = weddingDate.getTime() - today.getTime();
    this.daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}
