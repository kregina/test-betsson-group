import { Component, OnInit, Input } from '@angular/core';
import { MoviesGenres } from '@app/core/themoviedb';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() genresList: MoviesGenres;

  constructor() {
  }

  ngOnInit() {
  }

}
