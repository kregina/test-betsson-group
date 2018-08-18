import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { MoviesGenres, ThemoviedbService, PagedMovies } from '@app/core/themoviedb';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genres$: Observable<MoviesGenres>;
  movies$: Observable<PagedMovies>;
  selected;

  constructor(private service: ThemoviedbService, public route: ActivatedRoute) {
    this.genres$ = this.service.getAllGenders()
      .pipe(
        pluck('genres')
      );

    this.movies$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id: string) => id
        ? this.service.getMovesByGenre(id)
        : this.service.getAllMovies()),
      pluck('results')
    );
  }
}
