import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { VideoPlayerComponent } from '@app/shared/video-player/video-player.component';
import { MoviesCarouselComponent } from '@app/shared/movies-carousel/movies-carousel.component';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule,
    NgxY2PlayerModule,
    RouterModule
  ],
  declarations: [MoviesCarouselComponent, VideoPlayerComponent, StarRatingComponent],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule,
    NgxY2PlayerModule,
    MoviesCarouselComponent,
    VideoPlayerComponent,
    RouterModule,
    StarRatingComponent
  ]
})
export class SharedModule { }
