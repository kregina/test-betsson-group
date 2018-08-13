import { Component } from '@angular/core';
import { ThemoviedbService, PagedMovies, MovieSection, Movie } from '@app/core/themoviedb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sections: { title: string, source$: Observable<PagedMovies> }[];

  constructor(private service: ThemoviedbService) {
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

  get featuredSection() {
    return this.sections[0];
  }

  get otherSections() {
    return this.sections.slice(1);
  }
}
