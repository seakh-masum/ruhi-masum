import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() slides: any[] = [];

  breakPoints = {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
    },
  };
}
