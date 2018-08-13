import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Movie, PagedMovies, MovieDetail, Credits, MovieKeywords, MoviesGenres, MovieSection } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private http: HttpClient) { }

  getFeaturedMovie(): Observable<Movie> {
    return this.http.get<Movie>(`${environment.themoviedb.apiUrl}/movie/latest`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  getMovies(section: MovieSection, page: number = 1): Observable<PagedMovies> {
    return this.http.get<PagedMovies>(`${environment.themoviedb.apiUrl}/movies/${section}`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
        .set('page', page.toString())
    });
  }

  getMovieDetails(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${environment.themoviedb.apiUrl}/movie/${id}`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  getMovieCredits(id: number): Observable<Credits> {
    return this.http.get<Credits>(`${environment.themoviedb.apiUrl}/movie/${id}/credits`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  getMovieKeywords(id: number): Observable<MovieKeywords> {
    return this.http.get<MovieKeywords>(`${environment.themoviedb.apiUrl}/movie/${id}/keywords`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }

  getAllGenders(): Observable<MoviesGenres> {
    return this.http.get<MoviesGenres>(`${environment.themoviedb.apiUrl}/genders`, {
      params: new HttpParams()
        .set('api_key', environment.themoviedb.apiKey)
    });
  }
}