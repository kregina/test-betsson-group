import { Component, Input } from '@angular/core';
import { fade, spin } from '@app/shared/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fade(), spin()]
})
export class SearchComponent {
  @Input()
  show: boolean;

  constructor(private router: Router) {}

  updateSearch(value: string) {
    this.router.navigate(['/genres'], {
      queryParams: { search: value ? value : undefined }
    });
  }
}
