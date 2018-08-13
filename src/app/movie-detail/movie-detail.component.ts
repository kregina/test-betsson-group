import { Component, OnInit } from '@angular/core';
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
export class MovieDetailComponent implements OnInit {
  bookmark = true;
  showVideo = false;
  showRating = false;
  rating;
  movie$: Observable<any>;

  constructor(public route: ActivatedRoute, private service: ThemoviedbService) {
    this.movie$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id) => this.service.getMovieDetails(+id))
    );
  }

  ngOnInit() {
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
    console.log(rating);
    this.showRating = false;
    this.rating = rating;
  }

}
