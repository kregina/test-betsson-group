import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@app/core/themoviedb';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent implements OnInit {
  @Input() source: Movie;

  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  featuredMovie = this.source;

  constructor() { }

  ngOnInit() {
    console.log('source', this.source);
  }

  indexChanged(index) {
  }

}
