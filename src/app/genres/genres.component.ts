import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesGenres, ThemoviedbService, PagedMovies } from '@app/core/themoviedb';
import { pluck } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres$: Observable<MoviesGenres>;
  movies$: Observable<PagedMovies>;

  constructor(private service: ThemoviedbService) {
    this.genres$ = this.service.getAllGenders()
      .pipe(
        pluck('genres')
      );

    this.movies$ = this.service.getAllMovies()
      .pipe(
        pluck('results')
      );
  }

  ngOnInit() {
  }

}
