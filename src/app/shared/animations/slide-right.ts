import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const slideRight =
  trigger('slideRight', [
    transition(':enter', [
      animate('400ms', keyframes([
        style({ transform: 'translateX(-100%)' }),
        style({ transform: 'translateX(0)' })
      ]))
    ])
  ]);

