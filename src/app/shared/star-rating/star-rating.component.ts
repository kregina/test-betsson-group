import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarRatingComponent implements OnInit {
  @Input('rating') public rating: number;
  @Input('starCount') public starCount: number;
  @Input('color') public color: string;
  @Output() public ratingUpdated = new EventEmitter();
  public ratingArr = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
