import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const slideRight = () =>
  trigger('slideRight', [
    transition(':enter', [
      animate('1500ms', keyframes([
        style({ transform: 'translateX(-30%)' }),
        style({ transform: 'translateX(0)' })
      ]))
    ])
  ]);

