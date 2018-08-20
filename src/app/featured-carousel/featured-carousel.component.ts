import { Component, Input } from '@angular/core';
import { PagedMovies } from '@app/core/themoviedb';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent {
  @Input() source: PagedMovies;
  bookmark;

  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;

}
