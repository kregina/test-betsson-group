import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<any>;

  constructor(public route: ActivatedRoute) {
    const mock = {
      title: 'Movie title',
      url: 'https://picsum.photos/600/400/?1'
    };
    this.movie$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id) => of({ ...mock, id }))
    );
  }

  ngOnInit() {
  }

}
