import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxHmCarouselModule
  ],
  declarations: [],
  exports: [
    MaterialModule,
    NgxHmCarouselModule
  ]
})
export class SharedModule { }
