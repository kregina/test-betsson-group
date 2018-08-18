import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Movie, PagedMovies, MovieDetail, Credits, MovieKeywords, MoviesGenres, MovieSection, Genre } from './models';
import { Observable } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private http: HttpClient) { }

  @Cacheable()
  getMovesBySecton(section: MovieSection, page: number = 1): Observable<PagedMovies> {
    return this.http.get<PagedMovies>(`${environment.themoviedb.apiUrl}/movie/${section}`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
        .set('page', page.toString())
    });
  }
  @Cacheable()
  getMovesByGenre(gender_id: number, page: number = 1): Observable<PagedMovies> {
    return this.http.get<PagedMovies>(`${environment.themoviedb.apiUrl}/movie/${gender_id}`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  @Cacheable()
  getMovieDetails(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${environment.themoviedb.apiUrl}/movie/${id}`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  @Cacheable()
  getMovieCredits(id: number): Observable<Credits> {
    return this.http.get<Credits>(`${environment.themoviedb.apiUrl}/movie/${id}/credits`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  @Cacheable()
  getMovieKeywords(id: number): Observable<MovieKeywords> {
    return this.http.get<MovieKeywords>(`${environment.themoviedb.apiUrl}/movie/${id}/keywords`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  @Cacheable()
  getAllGenders(): Observable<MoviesGenres> {
    return this.http.get<MoviesGenres>(`${environment.themoviedb.apiUrl}/genre/movie/list`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }
}
