import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { fade, slideRight } from '@app/shared/animations';
import { slideLeft } from '@app/shared/animations/slide-left';
import { ThemoviedbService } from '@app/core/themoviedb';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  animations: [fade(), slideRight(-20, 500), slideLeft(20, 500)]
})
export class MovieDetailComponent {
  bookmark = true;
  showVideo = false;
  showRating = false;
  rating;
  id$: Observable<any>;
  keywords$: Observable<any>;
  movie$: Observable<any>;

  constructor(public route: ActivatedRoute, private service: ThemoviedbService) {
    this.id$ = this.route.params.pipe(
      pluck('id')
    );

    this.movie$ = this.id$.pipe(
      switchMap((id) => this.service.getMovieDetails(+id))
    );

    this.keywords$ = this.id$.pipe(
      switchMap((id) => this.service.getMovieKeywords(+id).pipe(pluck('keywords')))
    );
  }

  get iconName() {
    return this.bookmark ? 'bookmark' : 'bookmark_border';
  }

  get stateVideo() {
    return this.showVideo ? 'show' : 'hide';
  }

  videoToglle() {
    this.showVideo = !this.showVideo;
  }

  get stateRating() {
    return this.showRating ? 'show' : 'hide';
  }

  ratingToggle() {
    this.showRating = !this.showRating;
  }

  onRatingChanged(rating) {
    this.showRating = false;
    this.rating = rating;
  }

}
