import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  @Input() buttonType: string;

  bookmark;

  constructor() { }

  ngOnInit() {
  }

  addBookmark() {
    this.bookmark = !this.bookmark;
  }
}
