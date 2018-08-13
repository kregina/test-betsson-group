import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, width: number): string {
    return `${environment.themoviedb.imageUrl}/w${width}${value}?api_key=${environment.themoviedb.apiKey}`;
  }
}
