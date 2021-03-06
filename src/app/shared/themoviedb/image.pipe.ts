import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(value: string, width: number): string {
    return value
      ? `${environment.themoviedb.imageUrl}/w${width}${value}?api_key=${
          environment.themoviedb.apiKey
        }`
      : '/assets/images/poster-placeholder.png';
  }
}
