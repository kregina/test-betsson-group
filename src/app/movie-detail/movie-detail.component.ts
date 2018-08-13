import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { fade, slideRight } from '@app/shared/animations';
import { slideLeft } from '@app/shared/animations/slide-left';

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

  constructor(public route: ActivatedRoute) {

    const movie_results = {
      'adult': false,
      'backdrop_path': '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      'belongs_to_collection': {
        'id': 86311,
        'name': 'The Avengers Collection',
        'poster_path': '/qJawKUQcIBha507UahUlX0keOT7.jpg',
        'backdrop_path': '/zuW6fOiusv4X9nnW3paHGfXcSll.jpg'
      },
      'budget': 300000000,
      'genres': [
        {
          'id': 12,
          'name': 'Adventure'
        },
        {
          'id': 878,
          'name': 'Science Fiction'
        },
        {
          'id': 14,
          'name': 'Fantasy'
        },
        {
          'id': 28,
          'name': 'Action'
        }
      ],
      'homepage': 'http://marvel.com/movies/movie/223/avengers_infinity_war_part_1',
      'id': 299536,
      'imdb_id': 'tt4154756',
      'original_language': 'en',
      'original_title': 'Avengers: Infinity War',
      // tslint:disable-next-line:max-line-length
      'overview': 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
      'popularity': 311.704,
      'poster_path': '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      'production_companies': [
        {
          'id': 420,
          'logo_path': '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
          'name': 'Marvel Studios',
          'origin_country': 'US'
        }
      ],
      'production_countries': [
        {
          'iso_3166_1': 'US',
          'name': 'United States of America'
        }
      ],
      'release_date': '2018-04-25',
      'revenue': 2045186856,
      'runtime': 149,
      'spoken_languages': [
        {
          'iso_639_1': 'en',
          'name': 'English'
        }
      ],
      'status': 'Released',
      'tagline': 'An entire universe. Once and for all.',
      'title': 'Avengers: Infinity War',
      'video': false,
      'vote_average': 8.3,
      'vote_count': 6630
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
