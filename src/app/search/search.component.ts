import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('searchAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])
  ]
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
