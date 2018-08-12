import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MovieDetailRoutingModule
  ],
  declarations: [MovieDetailComponent]
})
export class MovieDetailModule { }
