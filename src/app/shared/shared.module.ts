import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { VideoPlayerComponent } from '@app/shared/video-player/video-player.component';
import { MoviesCarouselComponent } from '@app/shared/movies-carousel/movies-carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule,
    RouterModule
  ],
  declarations: [MoviesCarouselComponent, VideoPlayerComponent],
  exports: [
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule,
    MoviesCarouselComponent,
    VideoPlayerComponent,
    RouterModule
  ]
})
export class SharedModule { }
