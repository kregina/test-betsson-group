import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    MaterialModule,
    NgxHmCarouselModule
  ]
})
export class SharedModule { }
