import { Component, OnInit } from '@angular/core';
import { NgxY2PlayerOptions } from 'ngx-y2-player';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  playerOptions: NgxY2PlayerOptions = {
    videoId: 'yjmp8CoZBIo',
    height: 'auto', // you can set 'auto', it will use container width to set size
    width: 500,
    // when container resize, it will call resize function, you can custom this by set resizeDebounceTime, default is 200
    resizeDebounceTime: 0,
    playerVars: {
      autoplay: 0,
    },
    // aspectRatio: (3 / 4), // you can set ratio of aspect ratio to auto resize with
  };

  constructor() { }

  ngOnInit() {
  }

}
