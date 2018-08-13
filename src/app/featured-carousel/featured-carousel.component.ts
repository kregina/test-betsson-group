import { Component, OnInit, Input } from '@angular/core';
import { Movie, PagedMovies } from '@app/core/themoviedb';
import { environment } from '@env/environment';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent implements OnInit {
  @Input() source: PagedMovies;

  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  bannerList;

  constructor() { }

  ngOnInit() {
    this.bannerList = this.source.results.map((result) => {
      return {
        url: `${environment.themoviedb.imageUrl}/w1280${result.backdrop_path}?api_key=${environment.themoviedb.apiKey}`,
        title: `${result.title}`
      };
    });
  }

  indexChanged(index) {
  }

}
