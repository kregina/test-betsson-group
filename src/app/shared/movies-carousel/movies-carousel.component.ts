import { Component, OnInit, Input } from '@angular/core';
import { PagedMovies } from '@app/core/themoviedb';
import { environment } from '@env/environment';

@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent implements OnInit {

  @Input() title: string;
  @Input() source: PagedMovies;

  bannerList;

  constructor() { }

  ngOnInit() {
    this.bannerList = this.source.results.map((result) => {
      return {
        url: `${environment.themoviedb.imageUrl}/w500${result.poster_path}?api_key=${environment.themoviedb.apiKey}`,
        title: `${result.title}`,
        id: result.id
      };
    });
  }

  change($event) {
    console.log($event);
  }

}
