import { Component, OnInit } from '@angular/core';
import { fade, spin } from '../shared/animations/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fade (), spin ()]
})
export class SearchComponent implements OnInit {
  showSearchInput = false;

  constructor() {
  }

  ngOnInit() {
    console.log(this.showSearchInput);
  }

  get iconName() {
    return this.showSearchInput ? 'close' : 'search';
  }

  get stateName() {
    return this.showSearchInput ? 'show' : 'hide';
  }

  toggleSearch() {
    this.showSearchInput = !this.showSearchInput;
  }
}
