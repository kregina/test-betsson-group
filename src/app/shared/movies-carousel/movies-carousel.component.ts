import { Component, OnInit, Input } from '@angular/core';
import { PagedMovies } from '@app/core/themoviedb';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent implements OnInit {

  @Input() title: string;
  @Input() source: PagedMovies;

  menus = '1234567890'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      id: `${num}`
    };
  });

  constructor() { }

  ngOnInit() {
  }

  change($event) {
    console.log($event);
  }

}
