import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-married',
  standalone: true,
  imports: [],
  templateUrl: './getting-married.component.html',
  styleUrl: './getting-married.component.scss',
})
export class GettingMarriedComponent {
  brideUrl =
    'https://res.cloudinary.com/ruhi-birthday/image/upload/v1722844795/masum-ruhi/IMG_20230610_174559_ca5isr.jpg';
  groomUrl =
    'https://res.cloudinary.com/ruhi-birthday/image/upload/v1722844585/masum-ruhi/IMG_3512_n3xpbq.jpg';
  quote = `After a wonderful journey of four years together, we are thrilled to announce that we will be tying the knot on October 15, 2024. Our time together has been filled with countless happy and cherished moments, with only a few minor sad memories that we have long since forgotten. It's hard to believe that the day we’ve dreamed of is just around the corner—when we can finally share our lives under the same roof.

For the past four years, we've managed a long-distance relationship with 130 kilometers distance in between us. Though our time together has been limited to occasional dates, movie nights, and shared meals, and much of the year has been spent on video calls, the strength of our bond has only grown.

Now, as we look forward to being together every day, we are filled with joy and anticipation for our new life as husband and wife.

We sincerely appreciate your well-wishes and blessings as we embark on this exciting new chapter. May our future be filled with love, happiness, and endless cherished moments.`;
}
