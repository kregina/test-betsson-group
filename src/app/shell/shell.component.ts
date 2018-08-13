import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { slideRight } from '@app/shared/animations';
import { ThemoviedbService, MoviesGenres } from '@app/core/themoviedb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [slideRight(-100, 500)]
})
export class ShellComponent implements OnDestroy {
  genres$: Observable<MoviesGenres>;
  showSubmenu = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private service: ThemoviedbService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.genres$ = this.service.getAllGenders();
    console.log('this.genres$', this.genres$.source);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }

}
