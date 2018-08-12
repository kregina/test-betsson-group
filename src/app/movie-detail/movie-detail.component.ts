import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { fade } from '@app/shared/animations';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  animations: [fade()]
})
export class MovieDetailComponent implements OnInit {
  bookmark = true;
  showVideo = false;
  movie$: Observable<any>;

  constructor(public route: ActivatedRoute) {

    const movie_results = {
      'adult': false,
      'backdrop_path': '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      'genre_ids': [
        28,
        12,
        14,
        878
      ],
      'id': 299536,
      'original_language': 'en',
      'original_title': 'Avengers: Infinity War',
      // tslint:disable-next-line:max-line-length
      'overview': 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
      'poster_path': '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      'release_date': '2018-04-25',
      'title': 'Avengers: Infinity War',
      'video': false,
      'vote_average': 8.3,
      'vote_count': 6602,
      'popularity': 311.704
    };

    this.movie$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id) => of({ ...movie_results, id }))
    );
  }

  ngOnInit() {
  }

  get iconName() {
    return this.bookmark ? 'bookmark' : 'bookmark_border';
  }

  get stateName() {
    return this.showVideo ? 'show' : 'hide';
  }

  videoToglle() {
    this.showVideo = !this.showVideo;
  }

}
