import { Component } from '@angular/core';
import { ThemoviedbService, PagedMovies, MovieSection, Movie } from '@app/core/themoviedb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sectionMovie = 'Top rated movies';

  featured$: Observable<Movie>;
  sections: { title: string, source$: Observable<PagedMovies> }[];

  constructor(private service: ThemoviedbService) {
    this.featured$ = this.service.getFeaturedMovie();
    this.sections = [
      ['Now Playing', MovieSection.NowPlaying],
      ['Popular', MovieSection.Popular],
      ['Top Rated', MovieSection.TopRated],
      ['Upcoming', MovieSection.Upcoming]
    ].map((tuple) => ({
      title: tuple[0],
      source$: this.service.getMovies(tuple[1] as MovieSection)
    }));
  }
}
