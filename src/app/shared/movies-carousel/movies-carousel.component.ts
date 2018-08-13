import { Component, Input } from '@angular/core';
import { PagedMovies } from '@app/core/themoviedb';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent {

  @Input() title: string;
  @Input() source: PagedMovies;

  constructor() { }

  change($event) {
    console.log($event);
  }

}
